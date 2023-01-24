"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//  basic types
var id = 5;
var name = "Kushagra Sarathe";
var isPublished = false;
var x = "Hello";
var age;
var ids = [1, 2, 1, 5, 9, 47, 9, 8];
var arr = [1, "Name", 9, false, 9, 8];
// tuple
var person = [1, "Kushagra", true];
// tuple array
var employee;
employee = [
    [1, "kushagra"],
    [2, "Sourabh"],
    [3, "Rahul"],
];
// union: use to assign a particular variable more than one type
var pid;
pid = "22";
// enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
var user = {
    id: 1,
    name: "Kushagra"
};
// const user:  {
//     id: number,
//     name: string
// } = {
//     id: 1,
//     name: 'Kushagra'
// }
// type assertion
var cid = 1;
// let custId = <number> cid
var custId = cid;
// functions
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(1, 5))
function log(message) {
    console.log(message);
}
var user1 = {
    id: 1,
    name: "Kushagra"
};
var p1 = 1;
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
// classes: classes are used to create objects
var Person = /** @class */ (function () {
    // constructor runs everytime a class is used
    function Person(id, name) {
        // console.log(123);
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " is now registered");
    };
    return Person;
}());
var kush = new Person(1, "Kushagra");
var john = new Person(1, "John");
var Person1 = /** @class */ (function () {
    // constructor runs everytime a class is used
    function Person1(id, name) {
        // console.log(123);
        this.id = id;
        this.name = name;
    }
    Person1.prototype.register = function () {
        return "".concat(this.name, " is now registered");
    };
    return Person1;
}());
// subclasse = extending a class
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee(3, "Sourabh", "Manager");
// console.log(emp.position)
// console.log(emp.register())
// generics = used to build resuable components
function getArray(items) {
    return new Array().concat(items);
}
var numArr = getArray([1, 2, 5, 3, 4]);
var strArr = getArray(['Kushagra', 'Sourabh', 'Brad', 'John']);
numArr.push(6);
console.log(numArr);
