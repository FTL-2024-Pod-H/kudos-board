require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const boardRoutes = require("../routes/boardRoute");
const cardRoutes = require("../routes/cardRoute");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World, you are at the / route");
});

app.use("/boards", boardRoutes);
app.use("/cards", cardRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
