const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Database Connection: ${conn.connection.host}`.white.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  };
};

module.exports = connectDB;