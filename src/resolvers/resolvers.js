import User from '../models/user';

const Mutation = {
  signup: (parent, args, context, info) => {
    return User.create(args);
  }
};
const Query = {
  user: (parent, args, context, info) => User.findById(args.id),
  users: (parent, args, context, info) => User.find()
};
export const resolvers = {
  Query,
  Mutation
};

export default resolvers;
