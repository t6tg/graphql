import User from '../models/user';
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
  createProduct: (parent, args, context, info) => {
    const userId = '5e358d734dbef724a46f2753';
  }
};

export default Mutation;
