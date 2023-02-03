const mongoose = require("mongoose");
const config = require("config");

const db = config.get("");

const connectDB = async () => {
  try {
    await mongoose.mongo.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
