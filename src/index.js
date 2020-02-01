import express from 'express';
import mongoose from 'mongoose';
import server from './server';

const DB_User = 'admin';
const DB_Password = 'james';
const DB_Name = 'ecommerce';
const PORT = 4444;

const createServer = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_User}:${DB_Password}@graphql-basic-zimq8.mongodb.net/${DB_Name}?retryWrites=true&w=majority`,
      { useUnifiedTopology: true }
    );
    const app = express();

    server.applyMiddleware({ app });

    app.listen({ port: PORT }, () =>
      console.log(
        `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
      )
    );
  } catch (error) {
    console.log(error);
  }
};

createServer();
