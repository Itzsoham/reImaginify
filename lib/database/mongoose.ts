import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;
console.log("MongoDB URL:", MONGODB_URL);

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Disable the no-var rule for the entire declare global block
/* eslint-disable no-var */
declare global {
  var mongoose: MongooseConnection | undefined;
}
/* eslint-enable no-var */

// Use let or const for local variables
let cached = globalThis.mongoose || { conn: null, promise: null };

if (!cached) {
  cached = { conn: null, promise: null };
  globalThis.mongoose = cached;
}

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URL) throw new Error("Missing MONGODB_URL");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "imaginify",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
