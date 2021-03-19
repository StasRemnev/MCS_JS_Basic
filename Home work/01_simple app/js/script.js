/* практика  js «Интерактивный макет ➡️ Функции (4.8.1) */
'use strict'
function haveEnough() {

		let totalCash = Number(prompt('Сколько у тебя кэша в барсетке?'));
		let watchesCount = Number(prompt('Скольо часов хочешь купить?'));
		let earringsCount = Number(prompt('Сколько сережек с брюликами купишь?'));
		let watchesSum = Number(prompt('Цена одних часов?')) * watchesCount;
		let earringsSum = Number(prompt('Цена одних сережек?')) * earringsCount;

		if (totalCash >= watchesSum + earringsSum) {
			 return 'Enough $$$';
		} else {
			 return 'Not enough $$$';
		}
}

document.body.innerHTML = haveEnough();
