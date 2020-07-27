"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var transactionRoutes = require("./routes/transactions");
var app = express();
app.use(bodyParser.json());
app.use("/api", transactionRoutes);
app.use(function (err, req, res, next) {
    res.status(500).json({ message: "internal error" });
});
app.listen(3001);
