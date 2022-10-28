const mongoose = require("mongoose");

const connectDb = () => {
  try {
    const conn = mongoose.connect(
      "mongodb+srv://saurabh0413:saurabh0413@cluster0.czbx2yn.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("connection done");
  } catch (error) {
    console.log(error, error.message);
    process.exit();
  }
};

module.exports = connectDb;
