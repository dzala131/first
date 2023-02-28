import mongoose from "mongoose";

let a = 11;
const connectMongo = async () =>
  mongoose.connect(
    "mongodb+srv://abhikhant:3kEhvE72nNYottdQ@cluster12.xaslabc.mongodb.net/zala?retryWrites=true&w=majority"
  );
export default connectMongo;
