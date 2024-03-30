import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema(
  {
    patientName : {
      type: String,
      required: true,
    },
    patientDiagnoseWith : {
      type: String,
      required: true,
    },
    patientAddress: {
      type: String,
      required: true,
    },
    patientAge: {
      type: Number,
      required: true,
    },
    patientBloodGroup: {
      type: String,
      required: true,
    },
    patientGender : { 
      type: String,
      enum : ['M','F','O'],
      required: true,
    },
    patientAdmittedIn : {
      type: mongoose.Schema.Types.ObjectId,
      ref : 'Hospital',
    }

  },
   { timestamps: true });

export const Patient = mongoose.model('Patient', patientSchema);
