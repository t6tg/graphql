import User from '../models/user';
import Product from '../models/product';
import bcrypt from 'bcryptjs';

const Mutation = {
  signup: async (parent, args, context, info) => {
    // Trim and Lower case email
    const email = args.email.trim().toLowerCase();
    //  Check if email already exits in database
    const currentUsers = await User.find({});
    const isEmailExist =
      currentUsers.findIndex(user => user.email === email) > -1;
    if (isEmailExist) {
      throw new Error('Email already exist.');
    }
    // Validate password
    if (args.password.trim().length < 6) {
      throw new Error('Password must be at least 6 characters');
    }
    const password = await bcrypt.hash(args.password, 10);
    return User.create({ ...args, email, password });
  },
  createProduct: async (parent, args, context, info) => {
    const userId = '5e35aed505171939e171c71c';
    if (!args.description || !args.price || !args.imageUrl) {
      throw new Error('Please provide all required fields.');
    }
    const product = await Product.create({ ...args, user: userId });
    const user = await User.findById(userId);
    if (!user.products) {
      user.products = [product];
    } else {
      user.products.push(product);
    }
    await user.save();
    return Product.findById(product.id).populate({
      path: 'user',
      populate: { path: 'products' }
    });
  }
};

export default Mutation;
