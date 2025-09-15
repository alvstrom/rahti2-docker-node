const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Notes!");
});

router.post("/", (req, res) => {
  console.log("POST");
  console.log("Received body:", req.body);
  res.status(201).json({ message: "Received!", data: req.body });
});

router.patch("/:id", (req, res) => {
  console.log("Updating note with ID:", req.params.id);
  res.json({ message: `Note ${req.params.id} updated!`, data: req.body });
});

router.delete("/:id", (req, res) => {
  console.log("Deleting note with ID:", req.params.id);
  res.json({ message: `Note ${req.params.id} deleted!` });
});

module.exports = router;
