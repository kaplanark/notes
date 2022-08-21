const express = require("express");
const noteController = require("./../controller/note");
const router = express.Router();

router.get("/notes", noteController.getAllNotes);
router.post("/note", noteController.createNote);
router.put("/note/:id", noteController.updateNote);
router.delete("/note/:id", noteController.deleteNote);

module.exports = router;