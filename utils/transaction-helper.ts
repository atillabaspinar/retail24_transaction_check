import { transaction } from "../models/transaction";
/**
 *
 * @param element transaction to be added to resulting list
 * @param list resulting list of transactions to be sent
 * @param parents stack of parent elements of current transaction
 * @abstract  construct transcation element by calculationg combinedConnectionInfo
 * confidence: current confidence * parent's confidence
 * type: array of types till main parent
 */
const addToList = (
  element: transaction,
  list: transaction[],
  parents: transaction[]
) => {
  const { children, ...elementWithoutChildren } = element;
  const closestParent = parents ? parents[parents.length - 1] : undefined;

  //array of confidence types, by adding parent elements'
  const types: string[] = [];
  for (const p of parents) {
    types.push(p.connectionInfo?.type || "");
  }
  types.push(element.connectionInfo?.type || "");

  /**
   * construct combinedConnectionInfo
   * confidence: current confidence * parent's confidence
   * type: array of types till main parent
   */
  elementWithoutChildren.combinedConnectionInfo = {
    confidence:
      (element.connectionInfo?.confidence || 1) *
      (closestParent?.connectionInfo?.confidence || 1),
    type: types,
  };
  list.push(elementWithoutChildren);
};

/**
 *
 * @param parentStack parents of the current level in a stack
 * @param children current level elements in array
 * @param parentMatch if the parent (or higher level) of the current level was matched by id
 * @param idToFind id of the transcation in the request
 * @param confidenceLevel confidence level in the request
 * @param resultingList resulting list to be sent in the response
 * @param level level of the recursion
 * abstract this function basically gets a transaction id and confidence level and traverses the tree to match
 * any transaction that matches to (id, conf level). it either finds a matching transaction or, it finds a
 * transaction that is child of a matched transaction. Matching transactions are kept in an flat array.
 */
export const populateTransactionList = (
  parentStack: transaction[],
  children: transaction[],
  parentMatch: boolean = false,
  idToFind: string,
  confidenceLevel: number,
  resultingList: transaction[],
  level: number
) => {
  level++;
  children.forEach((element) => {
    let spaces = "";
    let level_ = level;
    while (level_--) spaces += "\t";
    let parentsInStack = "";
    for (const el of parentStack) {
      parentsInStack += el.id.substr(15, 4) + " ";
    }
    console.log(
      spaces,
      level,
      ". level",
      element.id,
      " confidence:",
      element.connectionInfo?.confidence,
      " parentMatch:",
      parentMatch,
      "parents: ",
      parentsInStack
    );

    let newParentMatch = parentMatch || false;
    if (element.id === idToFind) {
      newParentMatch = true;
      const found = resultingList.findIndex((el) => el.id === element.id);
      if (found === -1) {
        console.log(spaces, "MATCH by id, ADD to list ", element.id);
        addToList(element, resultingList, parentStack);
      } else {
        console.log(spaces, "MATCH by id, ALREADY in list ", element.id);
      }
    } else if (
      parentMatch &&
      element.connectionInfo &&
      element.connectionInfo?.confidence >= confidenceLevel
    ) {
      const found = resultingList.findIndex((el) => el.id === element.id);
      if (found === -1) {
        console.log(spaces, "MATCH by conf, ADD to list ", element.id);
        addToList(element, resultingList, parentStack);
      } else {
        console.log(spaces, "MATCH by conf, ALREADY in list ", element.id);
      }
    }

    if (element.children && element.children.length > 0) {
      const parents: transaction[] = [...parentStack];
      parents.push(element);
      populateTransactionList(
        parents,
        element.children,
        newParentMatch,
        idToFind,
        confidenceLevel,
        resultingList,
        level
      );
    }
  });
};

module.exports = { populateTransactionList };
