const express = require("express");
const mongoose = require("mongoose");

const app = express();
const articleRouter = require("./Routes/articleRoute");

const PORT = process.env.PORT || 3000;


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

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
