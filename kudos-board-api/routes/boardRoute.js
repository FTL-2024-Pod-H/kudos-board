const express = require("express");
const router = express.Router();
const boardController = require("../controllers/boardController");

//get all boards
router.get("/", boardController.getAllBoards);
// get a board by its ID
router.get("/:id", boardController.getBoardById);
// make a board
router.post("/", boardController.createBoard);

module.exports = router;
