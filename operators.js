// взятие остатка
console.log(5 % 2);

// возведение в степень
console.log(2 ** 4);

// сложение строк с помощью бинарного +
let s = "new" + "message" + "in" + "one" + "line";

console.log(s);

console.log("1234 " + "any text");

console.log("1" + 2);

console.log(1 + "2" + 3);

console.log(1 + 2 + "3");

console.log("10" - 4);

// Приведение к числу, унарный +

let test1 = "2";

let test2 = "3";

console.log(+test1 + +test2);

console.log(test1 + test2);

//присваивание

let n = 5

n = n * 5

console.log(n);

//

let artb = 3;

let brtb = 7;

let crtb = 90 - (artb = brtb -1);

console.log(artb);

console.log(crtb);

// инкремент/декремент

let number1 = 3;

number1++;

console.log(number1);

//

let number2 = 4;

number2--;

console.log(number2);

// Задачи:
// Чему будут равны переменные a, b, c и d в примере ниже?

let a = 1, b = 1;

let c = ++a; // a = 2, c = 2;
let d = b++; // b = 1, d = 1;

console.log(a);

console.log(b);

console.log(c);

console.log(d);

// Чему будут равны переменные f и x после исполнения кода в примере ниже?

let f = 2;

let x = 1 + (f *= 2); // x = 1 + (f = f + 2) / x = 5, f = 4

console.log(x);

console.log(f);

// Преобразование типов
// Какой результат будет у выражений ниже?

console.log("" + 1 + 0); // 10

console.log("" - 1 + 0); // 10 (-1 - пустая строка приводится к нулю);

console.log(true + false); // 1

console.log(6 / "3"); // 2

console.log("2" * "3"); // 6

console.log(4 + 5 + "px"); // 9px

console.log("$" + 4 + 5); // $9 ("$" преобразует следующие значения в строки, поэтому = $45);

console.log("4" - 2); // 2

console.log("4px" - 2); //4px2 (Nan т.к. не числовое значение);

console.log(7 / 0); // null

console.log(" -9 " + 5); //-95 (с пробелами);

console.log(" -9 " - 5); // NaN (Вычитание всегда преобразует к числу, значит строка " -9 " становится числом -9

console.log(null + 1); // 1

console.log(undefined + 1); // undefined (undefined становится NaN после численного преобразования)

console.log(" \t \n" - 2); // NaN (строка " \t \n" преобразовывается с число - 0)
