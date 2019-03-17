const express = require("express");

const mongoose = require("mongoose");

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profiles = require("./routes/api/profiles");

const app = express();
//DB Config
const db = require("./config/key").mongoURI;

//Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("mongoDB connected"))
  .catch(() => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));

//Use routes
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/profiles", profiles);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
