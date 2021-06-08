// Каким будет результат этих выражений?

let a = 5;

let b = 4;

console.log(5 > 4); // true

let fruuit1 = "ананас";

let fruit2 = "яблоко";

console.log("ананас" > "яблоко"); // false

let c = "2";

let d = "12";

console.log("2" > "12"); // false (true потому что сравниваются строки, не преобразуются в числа)

let smth = undefined;

let smth2 = null;

console.log(undefined == null); //true

let smth3 = undefined;

let smth4 = null;

console.log(undefined === null); // false

let smth5 = null;

let smth6 = "\n0\n";

console.log(null == "\n0\n") // false

let smth7 = null;

let smth8 = +"\n0\n";

console.log(null === +"\n0\n"); // false
