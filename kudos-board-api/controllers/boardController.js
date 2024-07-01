const boardModel = require("../models/boardModel");

const getAllBoards = async (req, res) => {
  const { name, category } = req.query;
  let filter = {};
  let orderBy = {};

  if (category) filter.category = category;

  if (name) orderBy = { name: name === "asc" ? "asc" : "desc" };

  try {
    const boards = await boardModel.getAllBoards(filter, orderBy);
    res.status(200).json(boards);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getBoardById = async (req, res) => {
  try {
    const board = await boardModel.getBoardById(req.params.id);
    if (board) {
      res.status(200).json(board);
    } else {
      res.status(404).json({ error: "Board not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createBoard = async (req, res) => {
  const boardData = req.body;
  try {
    const newBoard = await boardModel.createBoard(boardData);
    res.status(201).json(newBoard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllBoards,
  getBoardById,
  createBoard,
};
