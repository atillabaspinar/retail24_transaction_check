import express from "express";
const transactionsController = require("../controllers/transactions");
const router = express.Router();

router.get("/transactions", transactionsController.getTransactions);

module.exports = router;
