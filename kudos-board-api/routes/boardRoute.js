const express = require("express");
const router = express.Router();
const boardController = require("../controllers/boardController");

//get all boards
router.get("/", boardController.getAllBoards);
// get a board by its ID
router.get("/:id", boardController.getBoardById);
// make a board
router.post("/", boardController.createBoard);
// update a board
router.put("/:id", boardController.updateBoard)
// delete board
router.delete("/:id", boardController.deleteBoard)
// adding card to board
router.post("/:id/cards", boardController.addCardToBoard)

module.exports = router;
