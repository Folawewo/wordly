const express = require("express");
const connectDB = require("./config/database");

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/url"));

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}...`);
});
