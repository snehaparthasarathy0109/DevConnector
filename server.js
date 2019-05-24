const express = require("express");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profiles = require("./Routes/api/profiles");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//DB Config
const db = require("./config/key").mongoURI;

//Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("mongoDB connected"))
  .catch(() => console.log(err));

//app.get("/", (req, res) => res.send("Hello World"));
app.use(passport.initialize());
require("./config/passport")(passport);

//Use routes
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/profiles", profiles);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
