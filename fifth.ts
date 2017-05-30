// class animal
// {
// name:string;
// type:string;

// constructor(name:string,type:string){
// 	this.name=name;
// 	this.type=type;
// }
// food(message:string){
// 	return message;
// }
// }

// var cow=new animal("cow","domestic")

// console.log(cow)

// console.log( cow.food("hullu"))



var object={name:"asha",city:"bangalore"};
var object1={name:"asha",city:"bangalore"};

if(JSON.stringify(object) === JSON.stringify(object1))
{
	console.log("both object is equal")
}
else{
	console.log("objects are not equl")
}


