var superheros:Number[]=[];
superheros=[1,2,3]

superheros.unshift(0);
superheros.push(4);

console.log(superheros)

superheros.pop()

console.log(superheros);

superheros.shift();
console.log(superheros);

var supergirls:string[]=[];
supergirls=["asha","jany","kumar"];

for(var value in supergirls){
	console.log(value)
}

for (var value of supergirls){
	console.log(value)
}

var objectdata:any=[{name:"asha"},{name:"jany"},{name:"kumar"}];//object ins not atype

objectdata.push({name:"adarsha"});
console.log(objectdata);

 for (var value1 of objectdata){  
 	console.log(value1)
 }
// var personobj:object={};

// console.log(personobj)

for(var i=0;i<=objectdata.length-1;i++){
	console.log(objectdata[i])
}
//var value=123;//valueis predefined

var sum=123;

if(true){
	var sum=456; //local to this only without var it becomes global
}
// function sample(){
// 	var sum=345;   //local to function //private
// }
// sample()
console.log(sum);
 
 let newsum=567;

 if(true){
 	let newsum=789;
 }
console.log(newsum);

const pi=3.14;
 if(true){
const pi=6.14;

 }
console.log(pi);


