/**
 * LET AND CONST USAGE IN ES6
 * >> DIFFERENCE BETWEEN LET AND VAR
 * >> SCOPES
 */

function varTest() {
    var a = 30;
    if (true) {
        var a = 50;
        console.log(`var a = ${a}`); // Modern JS es6 syntax also uses template literals.
    }
    console.log(`var a = ${a}`);
}

console.log('--------- varTest() ---------');
varTest();
console.log('--------- end of varTest() --------- \n');

/**
 * LET VARIABLES
 * >> LET enable us to declare block level scopes (global and local)
 */

function letTest() {
    let a = 30;
    if (true) {
        let a = 50;
        console.log(`let a = ${a}`);
    }
    console.log(`let a = ${a}`);
}

console.log('--------- letTest() ---------');
letTest();
console.log('--------- end of letTest() --------- \n');


/**
 * CONST VARIABLES
 * >> const enable us to declare a variable with a fixed value;
 */

const animals = [];

animals.push('dog');
animals.push('cat');

console.log(animals);

// animals = ['rat', 'horse']; // can't be compiled as it returns a type error. const can't be re-assigned.
// console.log(animals);

