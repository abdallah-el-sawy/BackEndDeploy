const express = require("express");
const mongoose = require("mongoose");

const app = express();
const articleRouter = require("./Routes/articleRoute");

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://abdallahelsawy706_db_user:mongo12345@rest.wumseou.mongodb.net/?appName=rest",
  )
  .then(() => {
    console.log("connected Successfully");
  })
  .catch((e) => {
    console.log("Error", e);
  });

app.use(articleRouter);

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
