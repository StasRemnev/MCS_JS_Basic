let totalCash = Number (prompt('Сколько у тебя кэша в барсетке?'));

let watchesCount = Number (prompt ('Скольо часов хочешь купить?'));
let earringsCount = Number (prompt ('Сколько сережек с брюликами купишь?'));

let watchesSum = Number (prompt('Цена одних часов?')) * watchesCount;
let earringsSum = Number (prompt('Цена одних сережек?')) * earringsCount;


let totalBuy = document.body.innerHTML = totalCash >= watchesSum + earringsSum;

