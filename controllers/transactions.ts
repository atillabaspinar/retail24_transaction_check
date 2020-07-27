import { populateTransactionList } from "../utils/transaction-helper";
import { testdata } from "../data/testdata";
import { transaction } from "../models/transaction";

export const getTransactions = (req: any, res: any, next: any) => {
  console.log(req.query);
  const transactionId = req.query.transactionId;
  const confidenceLevel = parseFloat(req.query.confidenceLevel);
  const resultingTransactionList: transaction[] = [];
  const level = 0; //recursion level
  const parentStack: transaction[] = []; //parents of the current transction
  populateTransactionList(
    parentStack,
    testdata,
    false,
    transactionId,
    confidenceLevel,
    resultingTransactionList,
    level
  );
  res.status("200").json(resultingTransactionList);
};
