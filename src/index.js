import express from 'express';
import mongoose from 'mongoose';
import server from './server';
import dotenv from 'dotenv';
dotenv.config();

const { DB_Name, DB_User, DB_Password, PORT } = process.env;

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
