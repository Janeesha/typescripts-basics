var addnumbers=function(num1:number,num2:number){
	return num1+num2;
}

var total=addnumbers(3,4);
console.log(total)


var addmorenumbers=function(num1:number,num2:number=2){
	return num1+num2
}

var total1=addmorenumbers(1);
console.log(total1);

var total1=addmorenumbers(1,4);
console.log(total1);

var manymorenumbers=function(num1:number,num2:number=2,num3?:number){ //? is going to tell its null value

	console.log("num1:",num1);
	console.log("num2:" ,num2);
	console.log("num3:",num3);

	if(num3!==null){
		return num1+num2+num3
	}

	return num1+num2
}


var newsum=manymorenumbers(1,2,null)

console.log(newsum)


function moreparameter(first,second,...others){  // here others is array of remaining parameter
	console.log(others);
	return others;
}

moreparameter(3,2,4,5,67,5,4,3);
  console.log("my rest params   ",moreparameter(3,2));

function sumnubers(...nums :number[]){
	for(var value of nums){
		console.log(value)
	}

}

sumnubers(1,2,3,4)