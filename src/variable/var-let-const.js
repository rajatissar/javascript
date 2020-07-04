var var1 = 100;
let let1 = 101;
const const1 = 102;

// ==============  redeclare ============== 
console.log(`var1 (initial): ${var1}`); // 100
var var1 = 200;
console.log(`var1 (redeclare): ${var1}`); // 200
// let let1 = 201; // SyntaxError: Identifier 'let1' has already been declared
// const const1 = 202; // SyntaxError: Identifier 'const1' has already been declared

// ============== function scope ============== 
function fun1() {
    var var3 = 300; // function scoped variable
    console.log(`var3 (inside function): ${var3}`); // 300

    var let3 = 301; // function scoped variable
    console.log(`let3 (inside function): ${let3}`); // 301

    const const3 = 302; // function scoped variable
    console.log(`const3 (inside function): ${const3}`); // 302
}
fun1();
// console.log(`var3: ${var3}`); // ReferenceError: var3 is not defined
// console.log(`let3: ${let3}`); // ReferenceError: let3 is not defined
// console.log(`const3: ${const3}`); // ReferenceError: const3 is not defined

// ============== block scope ==============
{
    var var4 = 400; // var does not get block scoped
    console.log(`var4 (inside block): ${var4}`); // 400

    let let4 = 401; // let get block scoped
    console.log(`let4 (inside block): ${let4}`); // 401

    const const4 = 402; // const get block scoped
    console.log(`const4 (inside block): ${const4}`); // 402
}
console.log(`var4 (outside  block): ${var4}`); // 400
// console.log(`let4 (outside  block): ${let4}`); // ReferenceError: let4 is not defined
// console.log(`const4 (outside  block): ${const4}`); // ReferenceError: const4 is not defined

// ============== object properties changes but not whole object ==============
const person = {
    'name': 'Rajat',
    'email': 'rajat@email.com'
};
person.name = 'Kumar';
console.log(`person: ${JSON.stringify(person)}`);

// TypeError: Assignment to constant variable.
// person = {
//     'name': 'Rajat',
//     'email': 'rajat@email.com'
// };

// ============== closure ==============
function fun2() {
    let a = 1;
    return function() {
        return ++a;
    }
};

const fun2_result = fun2();
console.log('fun2_result', fun2_result); // fun2_result [Function]
console.log('fun2_result called', fun2_result(), fun2_result()); // fun2_result called 2 3

// ============== Block Scope ==============

for (var i = 1; i <= 5; i++) {
    console.log('var i', i);
    setTimeout(() => {
        console.log('var setTimeout', i);
    })
}
// output: Because var is not block scoped so there is only 1 variable
// var i 1
// var i 2
// var i 3
// var i 4
// var i 5
// var setTimeout 6
// var setTimeout 6
// var setTimeout 6
// var setTimeout 6
// var setTimeout 6

for (let i = 1; i <= 5; i++) {
    console.log('let i', i);
    setTimeout(() => {
        console.log('let setTimeout', i);
    })
}

// Output: Because let is block scoped. New variable is getting created every time
// let i 1
// let i 2
// let i 3
// let i 4
// let i 5
// let setTimeout 1
// let setTimeout 2
// let setTimeout 3
// let setTimeout 4
// let setTimeout 5

// ============== Temporal Dead Zone ==============
console.log(`var5: ${var5}`); // undefined
var var5 = 500;
// console.log(`let5: ${let5}`); // ReferenceError: Cannot access 'let5' before initialization
let let5 = 501;
// console.log(`const5: ${const5}`); // ReferenceError: Cannot access 'const5' before initialization
const const5 = 502;