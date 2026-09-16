const express = require("express");

const app = express();
const articleRouter = require("./Routes/articleRoute");

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is working!");
});

app.use(articleRouter);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
