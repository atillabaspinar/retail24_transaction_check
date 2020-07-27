"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var transactionData = require("../data/testdata");
var getTransactions = function (req, res, next) {
    console.log(req.query);
    var transactionId = req.query.transactionId;
    var confidenceLevel = parseFloat(req.query.confidenceLevel);
    var resultingTransactionList = [];
    var level = 0; //recursion level
    var parentStack = []; //parents of the current transction
    populateTransactionList(parentStack, transactionData, false, transactionId, confidenceLevel, resultingTransactionList, level);
    res.status("201").json(resultingTransactionList);
};
/**
 *
 * @param element transaction to be added to resulting list
 * @param list resulting list of transactions to be sent
 * @param parents stack of parent elements of current transaction
 * @abstract  construct transcation element by calculationg combinedConnectionInfo
 * confidence: current confidence * parent's confidence
 * type: array of types till main parent
 */
var addToList = function (element, list, parents) {
    var _a, _b, _c, _d;
    var children = element.children, elementWithoutChildren = __rest(element, ["children"]);
    var closestParent = parents ? parents[parents.length - 1] : undefined;
    //array of confidence types, by adding parent elements'
    var types = [];
    for (var _i = 0, parents_1 = parents; _i < parents_1.length; _i++) {
        var p = parents_1[_i];
        types.push(((_a = p.connectionInfo) === null || _a === void 0 ? void 0 : _a.type) || "");
    }
    types.push(((_b = element.connectionInfo) === null || _b === void 0 ? void 0 : _b.type) || "");
    /**
     * construct combinedConnectionInfo
     * confidence: current confidence * parent's confidence
     * type: array of types till main parent
     */
    elementWithoutChildren.combinedConnectionInfo = {
        confidence: (((_c = element.connectionInfo) === null || _c === void 0 ? void 0 : _c.confidence) || 1) *
            (((_d = closestParent === null || closestParent === void 0 ? void 0 : closestParent.connectionInfo) === null || _d === void 0 ? void 0 : _d.confidence) || 1),
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
var populateTransactionList = function (parentStack, children, parentMatch, idToFind, confidenceLevel, resultingList, level) {
    if (parentMatch === void 0) { parentMatch = false; }
    level++;
    children.forEach(function (element) {
        var _a, _b;
        var spaces = "";
        var level_ = level;
        while (level_--)
            spaces += "\t";
        var parentsInStack = "";
        for (var _i = 0, parentStack_1 = parentStack; _i < parentStack_1.length; _i++) {
            var el = parentStack_1[_i];
            parentsInStack += el.id.substr(15, 4) + " ";
        }
        console.log(spaces, level, ". level", element.id, " confidence:", (_a = element.connectionInfo) === null || _a === void 0 ? void 0 : _a.confidence, " parentMatch:", parentMatch, "parents: ", parentsInStack);
        var newParentMatch = parentMatch || false;
        if (element.id === idToFind) {
            newParentMatch = true;
            var found = resultingList.findIndex(function (el) { return el.id === element.id; });
            if (found === -1) {
                console.log(spaces, "MATCH by id, ADD to list ", element.id);
                addToList(element, resultingList, parentStack);
            }
            else {
                console.log(spaces, "MATCH by id, ALREADY in list ", element.id);
            }
        }
        else if (parentMatch &&
            element.connectionInfo &&
            ((_b = element.connectionInfo) === null || _b === void 0 ? void 0 : _b.confidence) >= confidenceLevel) {
            var found = resultingList.findIndex(function (el) { return el.id === element.id; });
            if (found === -1) {
                console.log(spaces, "MATCH by conf, ADD to list ", element.id);
                addToList(element, resultingList, parentStack);
            }
            else {
                console.log(spaces, "MATCH by conf, ALREADY in list ", element.id);
            }
        }
        if (element.children && element.children.length > 0) {
            var parents = __spreadArrays(parentStack);
            parents.push(element);
            populateTransactionList(parents, element.children, newParentMatch, idToFind, confidenceLevel, resultingList, level);
        }
    });
};
exports.getTransactions = getTransactions;
