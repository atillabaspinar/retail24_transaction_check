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
Object.defineProperty(exports, "__esModule", { value: true });
exports.populateTransactionList = void 0;
/**
 *
 * @param element transaction to be added to resulting list
 * @param list resulting list of transactions to be sent
 * @param parents stack of parent elements of current transaction
 * @abstract  construct transcation element by calculationg combinedConnectionInfo
 * confidence: current confidence * parent's confidence
 * type: array of types till main parent
 */
var addToList = function (element, list, parents, idToFind) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var children = element.children, elementWithoutChildren = __rest(element, ["children"]);
    var parentsOfElement = parents.slice().reverse();
    var closestParent = parentsOfElement.length > 0 ? parentsOfElement[0] : undefined;
    // element is matched by id, there is no parent of it
    if (element.id === idToFind) {
        console.log("add to list PARENT");
        if ((_a = element.connectionInfo) === null || _a === void 0 ? void 0 : _a.type) {
            elementWithoutChildren.combinedConnectionInfo = {
                confidence: 1,
                type: [(_b = element.connectionInfo) === null || _b === void 0 ? void 0 : _b.type],
            };
            list.push(elementWithoutChildren);
        }
    }
    else {
        // element is matched by confidence, there is at least one parent (matched by id)
        var types = [];
        // first push elements type
        if ((_c = element.connectionInfo) === null || _c === void 0 ? void 0 : _c.type) {
            types.push((_d = element.connectionInfo) === null || _d === void 0 ? void 0 : _d.type);
        }
        // then push parents' type until main parent
        for (var _i = 0, parentsOfElement_1 = parentsOfElement; _i < parentsOfElement_1.length; _i++) {
            var p = parentsOfElement_1[_i];
            if ((_e = p.connectionInfo) === null || _e === void 0 ? void 0 : _e.type) {
                types.push((_f = p.connectionInfo) === null || _f === void 0 ? void 0 : _f.type);
            }
            if (p.id === idToFind) {
                //reached to the main parent, stop
                break;
            }
        }
        elementWithoutChildren.combinedConnectionInfo = {
            confidence: (((_g = element.connectionInfo) === null || _g === void 0 ? void 0 : _g.confidence) || 1) *
                (((_h = closestParent === null || closestParent === void 0 ? void 0 : closestParent.connectionInfo) === null || _h === void 0 ? void 0 : _h.confidence) || 1),
            type: types,
        };
        list.push(elementWithoutChildren);
    }
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
exports.populateTransactionList = function (parentStack, children, parentMatch, idToFind, confidenceLevel, resultingList, level) {
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
            parentsInStack += el.id.substr(20) + " ";
        }
        console.log(spaces, level, ". level", element.id, " confidence:", (_a = element.connectionInfo) === null || _a === void 0 ? void 0 : _a.confidence, " parentMatch:", parentMatch, "parents: ", parentsInStack);
        var newParentMatch = parentMatch || false;
        if (element.id === idToFind) {
            newParentMatch = true;
            var found = resultingList.findIndex(function (el) { return el.id === element.id; });
            if (found === -1) {
                console.log(spaces, "MATCH by id, ADD to list ", element.id);
                addToList(element, resultingList, parentStack, idToFind);
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
                addToList(element, resultingList, parentStack, idToFind);
            }
            else {
                console.log(spaces, "MATCH by conf, ALREADY in list ", element.id);
            }
        }
        if (element.children && element.children.length > 0) {
            var parents = __spreadArrays(parentStack);
            parents.push(element);
            exports.populateTransactionList(parents, element.children, newParentMatch, idToFind, confidenceLevel, resultingList, level);
        }
    });
};
module.exports = { populateTransactionList: exports.populateTransactionList };
