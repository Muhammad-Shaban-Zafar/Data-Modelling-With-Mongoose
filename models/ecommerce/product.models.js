import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowerCase: true,
    },
    description: {
      type: String,
      required: true,
      upperCase: true,
    },
    image: {
      type: String,
    },
    price: {
      type: String,
      default: 0,
      required: true,
    },
    stock: {
      default: 0,
      type: Number,
    },
    catagory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Catagory',
      required: true,
    },
    owner:{
      type:mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model('Product', productSchema);
