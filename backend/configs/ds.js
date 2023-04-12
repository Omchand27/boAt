const mongoose = require("mongoose");
require("dotenv").config();

const connectMongoDB = async () => {
  try {
    const connect = mongoose.connect(process.env.MongoUrl);
  } catch (err) {
    console.log(`something wrong ${err}`);
  }
};

module.exports = { connectMongoDB };
