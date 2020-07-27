"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transaction_helper_1 = require("../utils/transaction-helper");
var testdata_1 = require("../data/testdata");
var getTransactions = function (req, res, next) {
    console.log(req.query);
    var transactionId = req.query.transactionId;
    var confidenceLevel = parseFloat(req.query.confidenceLevel);
    var resultingTransactionList = [];
    var level = 0; //recursion level
    var parentStack = []; //parents of the current transction
    transaction_helper_1.populateTransactionList(parentStack, testdata_1.testdata, false, transactionId, confidenceLevel, resultingTransactionList, level);
    res.status("201").json(resultingTransactionList);
};
exports.getTransactions = getTransactions;
