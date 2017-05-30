var addnumbers = function (num1, num2) {
    return num1 + num2;
};
var total = addnumbers(3, 4);
console.log(total);
var addmorenumbers = function (num1, num2) {
    if (num2 === void 0) { num2 = 2; }
    return num1 + num2;
};
var total1 = addmorenumbers(1);
console.log(total1);
var total1 = addmorenumbers(1, 4);
console.log(total1);
var manymorenumbers = function (num1, num2, num3) {
    if (num2 === void 0) { num2 = 2; }
    console.log("num1:", num1);
    console.log("num2:", num2);
    console.log("num3:", num3);
    if (num3 !== null) {
        return num1 + num2 + num3;
    }
    return num1 + num2;
};
var newsum = manymorenumbers(1, 2, null);
console.log(newsum);
function moreparameter(first, second) {
    var others = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        others[_i - 2] = arguments[_i];
    }
    console.log(others);
    return others;
}
moreparameter(3, 2, 4, 5, 67, 5, 4, 3);
console.log("my rest params   ", moreparameter(3, 2));
function sumnubers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    for (var _a = 0, nums_1 = nums; _a < nums_1.length; _a++) {
        var value = nums_1[_a];
        console.log(value);
    }
}
sumnubers(1, 2, 3, 4);
