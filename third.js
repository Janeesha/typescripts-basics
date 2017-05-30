var superheros = [];
superheros = [1, 2, 3];
superheros.unshift(0);
superheros.push(4);
console.log(superheros);
superheros.pop();
console.log(superheros);
superheros.shift();
console.log(superheros);
var supergirls = [];
supergirls = ["asha", "jany", "kumar"];
for (var value in supergirls) {
    console.log(value);
}
for (var _i = 0, supergirls_1 = supergirls; _i < supergirls_1.length; _i++) {
    var value = supergirls_1[_i];
    console.log(value);
}
var objectdata = [{ name: "asha" }, { name: "jany" }, { name: "kumar" }]; //object ins not atype
objectdata.push({ name: "adarsha" });
console.log(objectdata);
for (var _a = 0, objectdata_1 = objectdata; _a < objectdata_1.length; _a++) {
    var value1 = objectdata_1[_a];
    console.log(value1);
}
// var personobj:object={};
// console.log(personobj)
for (var i = 0; i <= objectdata.length - 1; i++) {
    console.log(objectdata[i]);
}
//var value=123;//valueis predefined
var sum = 123;
if (true) {
    var sum = 456; //local to this only without var it becomes global
}
// function sample(){
// 	var sum=345;   //local to function //private
// }
// sample()
console.log(sum);
var newsum = 567;
if (true) {
    var newsum_1 = 789;
}
console.log(newsum);
var pi = 3.14;
if (true) {
    var pi_1 = 6.14;
}
console.log(pi);
