const express = require("express");
const router = express.Router();
const cardController = require("../controllers/cardController");

//get all cards
router.get("/", cardController.getAllCards);
//get a card by its ID
router.get("/:card_id", cardController.getCardById);
// create a card
router.post("/", cardController.createCard);
// delete a card
router.delete("/:card_id", cardController.deleteCard);
//update a card
router.put("/:card_id", cardController.updateCard);

module.exports = router;
