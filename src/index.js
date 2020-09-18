require("./models/User");
require("./models/Track");
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const trackRoutes = require("./routes/trackRoutes");
const bodyParser = require("body-parser");
const requireAuth = require("./middlewares/requireAuth");
const app = express();
app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

mongoDBuri =
  "mongodb+srv://admin:adminadmin@trackerappdb.wqydi.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(mongoDBuri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instances");
});

mongoose.connection.on("error", (err) => {
  console.log("Error connecting to mongoDb instance: ", err);
});

app.get("/", requireAuth, (req, res) => {
  //   res.send(`Your email is ${req.user.email}`);
  res.send(`Your password is ${req.user.password}`);
});

app.listen("3000", () => {
  console.log("server listening port 3000");
});
