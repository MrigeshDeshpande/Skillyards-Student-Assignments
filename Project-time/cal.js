const prompt = require('prompt-sync')(); 

const num1 = parseFloat(prompt("enter first number"))
const num2 = parseFloat(prompt("enter second number"))
const operator = prompt("enter operator (+,-,*,/,%)")


let result;

if(operator ==='+')
{
	result = num1+num2;
}else if(operator === '-')
{
	result = num1-num2;
}
else if(operator === '/'){
	if(num2 ===0 )
	{
		console.log("error: not divisible")
	}else{
			result = num1/num2
	}
}
else{
	result ="Invalid operator"
}

console.log(`${result}`)