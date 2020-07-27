import express from "express";
import * as apiController from "../controllers/transactions";
const router = express.Router();

router.get("/transactions", apiController.getTransactions);

module.exports = router;
