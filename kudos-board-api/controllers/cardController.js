const cardModel = require("../models/cardModel");
const { get } = require("../routes/boardRoute");

const getAllCards = async (req, res) => {
  try {
    const cards = await cardModel.getAllCards();
    res.status(200).json(cards);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCardById = async (req, res) => {
  try {
    const card = await cardModel.getCardById(req.params.card_id);
    card
      ? res.status(200).json(card)
      : res.status(404).json({ error: "Card not found" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createCard = async (req, res) => {
  const cardData = req.body;
  try {
    const newCard = await cardModel.createCard(cardData);
    res.status(201).json(newCard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateCard = async (req, res) => {
  try {
    const updatedCard = await cardModel.updateCard(
      req.params.card_id,
      req.body
    );
    updatedCard
      ? res.status(200).json(updatedCard)
      : res
          .status(404)
          .json({ error: "the card you are trying to update does not exist" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCard = async (req, res) => {
  try {
    const deletedCard = await cardModel.deleteCard(req.params.card_id);
    deletedCard
      ? res.status(200).json(deletedCard)
      : res
          .status(404)
          .json({ error: "the card you are trying to delete does not exist" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllCards,
  getCardById,
  createCard,
  updateCard,
  deleteCard,
};
