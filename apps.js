'use strict'

{
	let ferstNum = 19;
	let secondNum = 22;

	let sumPlus = ferstNum + secondNum;
	console.log(sumPlus);

	let sumDevision = ferstNum / secondNum;

	let sumMultiplication = ferstNum * secondNum;

	document.write(` Задача 1. Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці <br> результат обчислень <br>  складання - ${sumPlus} <br> множення - ${sumDevision.toFixed(2)} <br> ділення - ${sumMultiplication} <br><br>`);

}


{
	//Задача 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.

	let dayBirth = 1;

	let yourNow = 2023;

	let yourBirth = parseInt(prompt('задача друга, будь ласка введіть рік народження'));

	let yourYear = yourNow - yourBirth;

	document.write(`Задача 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років. <br> щось мені підказуе що тобі ${yourYear} <br><br><br><br>`);
}

{
	//Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).

	let oneProdyctPrice = '9грн';
	document.write(`вартість усіх товарів ${oneProdyctPrice}<br>`)

	let quantityProdyct = 5;
	document.write(`кількість усіх товарів ${quantityProdyct}<br>`)

	let totalPrice = parseInt(oneProdyctPrice) * quantityProdyct;

	let priceProcent = totalPrice / 5;


	document.write(`Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості) <br> загальна вартість усіх товарів дорівнюе ${totalPrice}грн <br><br> а вартість усіх товарів із ПДФ дорівнюе ${priceProcent}грн <br><br><br><br>`);
}

{
	//Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.
	document.write(`Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.<br> <br>`);


	let longStart = prompt('напешіть довжину у см');

	let longSecond = parseInt(longStart) * 100;
	document.write(`довжена у метрах ${longSecond}<br> <br>`);

	let longThree = parseInt(longSecond) * 1000;

	document.write(`довжена у кілометрах  ${longSecond}<br> <br> <br> <br>`);
}

{
	//Задача 5. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.
	document.write(`Задача 5. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.<br> <br>`);

	let quantitySecond = parseInt(prompt(`будь ласка введи кількість секунд`));

	document.write(`кількість секунд ${quantitySecond}s після початку доби <br>`);

	let quantityMinyt = quantitySecond / 60;
	document.write(`кількість хвилин ${quantityMinyt.toFixed(2)}h після початку доби <br>`);

	let quantityHour = quantityMinyt / 60;

	document.write(`кількість секунд ${quantityHour.toFixed(2)}hr після початку доби <br><br><br><br>`);

}

{
	//Задача 6. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.
	document.write(`Задача 6. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.<br>`);

	let ferstProdyct = parseInt(prompt('введіть кількість товарів'));

	let ferstProdyctPrice = parseInt(prompt('введіть ціну товара'));

	let ferstProdyctTotalPrice = ferstProdyct * ferstProdyctPrice;
	// змінні перших товарів

	let secondProdyct = parseInt(prompt('введіть кількість другої групи товарів'));

	let secondProdyctPrice = parseInt(prompt('введіть ціну другої групи товарів'));

	let secondProdyctTotalPrice = secondProdyct * secondProdyctPrice;
	// змінні другої групи товарів

	let thirdProdyct = parseInt(prompt('введіть кількість третої групи товарів'));

	let thirdProdyctPrice = parseInt(prompt('введіть ціну третої групи товарів'));

	let thirdProdyctTotalPrice = thirdProdyct * thirdProdyctPrice;

	let totalPrice = thirdProdyctPrice + secondProdyctPrice + ferstProdyctPrice;

	document.write(`<br></br><br></br><div class="column" style="max-width: 600px; height: 400;">
	<div class="column__row" style="display: flex; border: 3px solid red;">
		<div class="column__item" style=" border: 3px solid red;">${ferstProdyct}</div>
		<div class="column__item" style=" border: 3px solid red;">${ferstProdyctPrice} грн </div>
		<div class="column__item" style=" border: 3px solid red;">${ferstProdyctTotalPrice} грн </div>
	</div>
	<div class="column__row" style="display: flex; border: 3px solid red;">
		<div class="column__item" style=" border: 3px solid red;">${secondProdyct}</div>
		<div class="column__item" style=" border: 3px solid red;">${secondProdyctPrice}грн</div>
		<div class="column__item" style=" border: 3px solid red;">${secondProdyctTotalPrice}грн</div>
	</div>
	<div class="column__row" style="display: flex; border: 3px solid red;">
		<div class="column__item" style=" border: 3px solid red;">${thirdProdyct}</div>
		<div class="column__item" style=" border: 3px solid red;">${thirdProdyctPrice}грн</div>
		<div class="column__item" style=" border: 3px solid red;">${thirdProdyctTotalPrice}грн</div>
	</div>
	<div class="column__sum" style=" border: 3px solid red;">${totalPrice}грн</div>
</div><br></br><br></br>`)
}

{
	//Задача 7. Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).

	let minMans = 1, maxMans = 12;
	let a = minMans + Math.floor(Math.random() * (maxMans - minMans + 1));

	document.write(`${a}`);

	let minDay = 0, maxDay = 6;
	let b = minMans + Math.floor(Math.random() * (maxDay - minDay + 1));

	document.write(`${b}`);

}