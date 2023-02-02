const express = require("express");

const app = express();

app.use(express.json({ extended: false }));

app.use("/", require("./routes/index"));

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}...`);
});
