import mongoose, { Document, Schema } from 'mongoose';

export interface IFormData extends Document {

  email: string;
  fullName: string,
  phoneNumber: Number,
  homeAddress: string,
  residenceState: string,
  systemCapacity: string,
  systemPrice: string,
  occupation: string,
  otherSector: string,
  workplaceSector: string,
  placeOfEmployment: string,
  salaryRange: string,
  paymentPlan: string,
  createdAt: Date,
  provider: string,
}

const FormDataSchema = new Schema<IFormData>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber:{ type: Number, required: true },
    residenceState:{ type: String, required: true },
    systemCapacity:{ type: String, required: true },
    systemPrice:{ type: String, required: true },
    occupation:{ type: String, required: true },
    otherSector:{ type: String, required: false },
    workplaceSector:{ type: String, required: true },
    placeOfEmployment:{ type: String, required: true },
    salaryRange:{ type: String, required: true },
    homeAddress:{ type: String, required: true },
    paymentPlan:{ type: String, required: true },
    provider:{ type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IFormData>('FormData', FormDataSchema);
