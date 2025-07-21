import { Request, Response } from 'express';
import FormData from '../models/FormData';
import { transporter } from '../utils/mailer';
import dotenv from 'dotenv';
import { buildFormSubmissionEmail } from '../utils/emailTemplate';



dotenv.config();


// POST /api/forms
export const createFormData = async (req: Request, res: Response) => {
    try {
        const {
            fullName,
            email,
            phoneNumber,
            homeAddress,
            residenceState,
            systemCapacity,
            systemPrice,
            occupation,
            otherSector,
            workplaceSector,
            salaryRange,
            estimatedBudget,
            placeOfEmployment,
            paymentPlan,
        } = req.body;

        // Manual validation
        const errors: { field: string; message: string }[] = [];

        if (!fullName || fullName.trim().length < 2) {
            errors.push({ field: 'fullName', message: 'Full name is required and must be at least 2 characters.' });
        }

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.push({ field: 'email', message: 'Valid email is required.' });
        }

        if (!phoneNumber || isNaN(phoneNumber)) {
            errors.push({ field: 'phoneNumber', message: 'Phone number must be numeric.' });
        }

        if (!homeAddress) {
            errors.push({ field: 'homeAddress', message: 'Home address is required.' });
        }

        if (!residenceState) {
            errors.push({ field: 'residenceState', message: 'Residence state is required.' });
        }

        if (!systemCapacity) {
            errors.push({ field: 'systemCapacity', message: 'System capacity is required.' });
        }

        if (!systemPrice) {
            errors.push({ field: 'systemPrice', message: 'System price is required.' });
        }

        if (!occupation) {
            errors.push({ field: 'occupation', message: 'Occupation is required.' });
        }

        if (!workplaceSector) {
            errors.push({ field: 'workplaceSector', message: 'Workplace sector is required.' });
        }
        if (!placeOfEmployment) {
            errors.push({ field: 'placeOfEmployment', message: 'Place of employment is required.' });
        }
        if (!salaryRange) {
            errors.push({ field: 'salaryRange', message: 'Salary Range is required.' });
        }
        if (!estimatedBudget) {
            errors.push({ field: 'estimatedBudget', message: 'Estimated budget is required.' });
        }

        if (!paymentPlan) {
            errors.push({ field: 'paymentPlan', message: 'Payment plan is required.' });
        }

        if (errors.length > 0) {
            return res.status(400).json({
                status: 'error',
                message: 'Validation failed',
                errors: errors,
            });
        }

        // If validation passes, create the new form data
        const newFormData = new FormData({
            fullName,
            email,
            phoneNumber,
            homeAddress,
            residenceState,
            systemCapacity,
            systemPrice,
            occupation,
            otherSector,
            workplaceSector,
            placeOfEmployment,
            salaryRange,
            estimatedBudget,
            paymentPlan,
        });

        const savedData = await newFormData.save();
        const htmlContent = buildFormSubmissionEmail(fullName, savedData);

        // Prepare email content
        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Your Form Submission Confirmation',
            html: htmlContent,
        };

        const adminEmails = process.env.ADMIN_EMAIL
            ? process.env.ADMIN_EMAIL.split(',').map(email => email.trim())
            : [];

        const adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: adminEmails,
            subject: 'New Form Submission Received',
            html: htmlContent,
        };

        // Send emails in parallel


        try {
            await Promise.all([
                transporter.sendMail(userMailOptions),
                transporter.sendMail(adminMailOptions),
            ]);
        } catch (emailError) {
            console.error('Email sending error:', emailError);
            // Even if one fails, still save the form and respond with success
        }

        return res.status(201).json({
            status: 'success',
            message: 'Form submitted successfully. Confirmation emails sent.',
            data: savedData,
        });

    } catch (error) {
        console.error('Create FormData Error:', error);
        return res.status(500).json({
            status: 'error',
            message: 'Internal server error. Please try again later.',
        });
    }
};


// GET /api/forms?page=1
export const getFormData = async (req: Request, res: Response) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = 20;
        const skip = (page - 1) * limit;

        const total = await FormData.countDocuments();
        const forms = await FormData.find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const hasNext = skip + limit < total;
        const hasPrevious = page > 1;

        res.json({
            page,
            total,
            totalPages: Math.ceil(total / limit),
            hasNext,
            hasPrevious,
            forms,
        });
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
};
