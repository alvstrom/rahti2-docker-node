const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;

console.log(`Node.js ${process.version}`);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "hej" });
});

const notesRouter = require("./routes/notes");

app.use("/notes", notesRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
