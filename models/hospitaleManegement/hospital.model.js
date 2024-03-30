import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema(
  {
    hospitalName: {
      type: String,
      required: true,
    },
    hospitalAddressLine1: {
      type: String,
      required: true,
    },
    hospitalAddressLine2: {
      type: String,
    },
    hospitalCity: {
      type: String,
      reqired: true,
    },
    hospitalSpecializedIn: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export const Hospital = mongoose.model('Hospital', hospitalSchema);
