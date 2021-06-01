// Primitive

const number = 123;

const BigInt = 156115241521515n;

const string = 'Some Text';

const bool = true;

const typeNull = null;

const typeUndefined = undefined;

const symbol = Symbol("id");

// Objects

const obj = {
    number: 1234,
    string: 'Hello World',
};

console.log(obj);

console.log(typeof 123);

// Task.
// Что выведет этот скрипт?

let name = "Ilya";

console.log( `hello ${1}` ); // ? - `hello ${1}`;

console.log( `hello ${"name"}` ); // ? - `hello "name";

console.log(`hello ${name}`) // hello Ilya;

