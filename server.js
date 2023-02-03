const express = require("express");
const connectDB = require("./config/database");

const app = express();

connectDB()

app.use(express.json({ extended: false }));

app.use("/", require("./routes/index"));

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}...`);
});
