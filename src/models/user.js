import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    }
  ],
  carts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CartItems'
    }
  ],
  createdAt: {
    type: Date,
    required: true,
    default: () => Date.now()
  }
});

const User = mongoose.model('User', userSchema);
export default User;
