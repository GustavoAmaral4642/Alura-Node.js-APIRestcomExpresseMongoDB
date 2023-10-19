import mongoose from "mongoose";

mongoose.connect("mongodb+srv://gustavolgac:123@cluster0.ql37nsf.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;