export const buildFormSubmissionEmail = (recipientName: string, data: any) => `
  <!DOCTYPE html>
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
        }
        h2 {
          color: #007bff;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        td {
          padding: 8px 0;
          border-bottom: 1px solid #eee;
        }
        .footer {
          margin-top: 20px;
          font-size: 0.9em;
          color: #888;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>Hi ${recipientName},</h2>
        <p>Thank you for your submission. Here are the details:</p>
        <table>
          <tbody>
            <tr><td><strong>Full Name:</strong></td><td>${data.fullName}</td></tr>
            <tr><td><strong>Email:</strong></td><td>${data.email}</td></tr>
            <tr><td><strong>Phone Number:</strong></td><td>${data.phoneNumber}</td></tr>
            <tr><td><strong>Home Address:</strong></td><td>${data.homeAddress}</td></tr>
            <tr><td><strong>Residence State:</strong></td><td>${data.residenceState}</td></tr>
            <tr><td><strong>System Capacity:</strong></td><td>${data.systemCapacity}</td></tr>
            <tr><td><strong>Occupation:</strong></td><td>${data.occupation}</td></tr>
            <tr><td><strong>Other Sector:</strong></td><td>${data.otherSector}</td></tr>
            <tr><td><strong>Workplace Sector:</strong></td><td>${data.workplaceSector}</td></tr>
            <tr><td><strong>Estimated Budget:</strong></td><td>${data.estimatedBudget}</td></tr>
            <tr><td><strong>Payment Plan:</strong></td><td>${data.paymentPlan}</td></tr>
          </tbody>
        </table>
        <p class="footer">If you have any questions, please reply to this email.</p>
      </div>
    </body>
  </html>
`;
