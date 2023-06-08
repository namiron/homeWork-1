'use strict'

// Обчислити значення виразів 
//S1=a+12+b
{
	let ferstVariable = parseFloat(prompt('перша змінна'));
	let secondVariable = parseFloat(prompt('друга змінна'));
	let resultVariable = ferstVariable + 12 + secondVariable;

	console.log(`відповіть ${resultVariable}`);


}


//Обчислити значення виразів 2)


{
	let a = 10
	let b = 15;
	console.log(a);
	console.log(b);

	let sumAAndB = (a + b) / (2 * a);
	console.log(sumAAndB);
	let S2 = Math.sqrt(sumAAndB)
	console.log(S2.toFixed(2));
}

//Обчислити значення виразів 3)

{
	let a = 4;
	let b = 8;
	let c = 14;
	let calcSum = (a + b) * c;
	let s3 = Math.cbrt(calcSum);
	console.log(s3.toFixed(2));
}

//Обчислити значення виразів 4)
{
	let a = 2;
	let b = -3;
	console.log(b);

	let resultBody = a / b;
	console.log(parseFloat(resultBody.toFixed(3)));
	let s4 = Math.sin(parseFloat(resultBody.toFixed(3)));
	console.log(parseFloat(s4.toFixed(3)));
}


