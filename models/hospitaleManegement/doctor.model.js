import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema(
  {
    doctorName: {
      type: String,
      required : true,
    },
    doctorSalery : {
      type: Number,
      reqierd: true,
    },
    doctorQualification: {
      type: String,
      reqired: true,
    },
    doctorExperienceInYears : {
      type: Number,
      default: 0,
    },
    doctorWorkInHospitals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
      }
    ]

  }, 
  { timestamps: true }
  );

export const Doctor = mongoose.model('Doctor', doctorSchema);
