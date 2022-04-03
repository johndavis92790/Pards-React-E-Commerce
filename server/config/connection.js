const mongoose = require("mongoose");

const URL =
  "mongodb+srv://johndavis92790:$p1d3rMan@cluster0.8kqia.mongodb.net/pardsDB?retryWrites=true&w=majority";

mongoose.connect(process.env.MONGODB_URI || URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
