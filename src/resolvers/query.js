import User from '../models/user';

const Query = {
  user: (parent, args, context, info) => User.findById(args.id),
  users: (parent, args, context, info) => User.find()
};

export default Query;
