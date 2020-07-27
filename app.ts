const express = require("express");
const bodyParser = require("body-parser");

const transactionRoutes = require("./routes/transactions");

const app = express();

app.use(bodyParser.json());

app.use("/api", transactionRoutes);

app.use((err: any, req: any, res: any, next: any) => {
  res.status(500).json({ message: "internal error" });
});

app.listen(process.env.PORT || 80);
