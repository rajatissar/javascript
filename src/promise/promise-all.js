const ques_1 = true;
const ques_2 = false;
const ques_3 = false;
const ques_4 = false;

const f1 = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            console.log('f1 completed');
            resolve('f1');
        }, 1000);
    });
const f2 = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            console.log('f2 completed');
            resolve('f2');
        }, 2000);
    });
const f3 = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            console.log('f3 completed');
            resolve('f3');
        }, 3000);
    });
const generic_fun = (secs) =>
    new Promise((resolve) => {
        setTimeout(() => {
            console.log('secs', secs);
            resolve(secs);
        }, secs * 1000);
    });
const wait = (secs) =>
    new Promise((resolve) => {
        setTimeout(() => {
            console.log('secs', secs);
            resolve(secs);
        }, secs * 1000);
    });

// -----------------------------------------------------------------------------------------------------
// approach 1
// -----------------------------------------------------------------------------------------------------
if (ques_1) {
    const executed_promise_array = [f1(1), f2(), f3()]; // promise will execute here
}

// f1 completed
// f2 completed
// f3 completed

// -----------------------------------------------------------------------------------------------------
// approach 2
// -----------------------------------------------------------------------------------------------------
if (ques_2) {
    const promise_array_2 = [1, 2, 3].map(generic_fun); // promise will execute here
}

// secs 1
// secs 2
// secs 3

// -----------------------------------------------------------------------------------------------------
// approach 3
// -----------------------------------------------------------------------------------------------------
if (ques_3) {
    Promise.race([f3(), f2(), f1()])
        .then(([result_1, result_2, result_3]) => {
            console.log('result_1', result_1, 'result_2', result_2, 'result_3', result_3);
        })
        .catch((err) => {
            console.log('err', err);
        });
}

// f1 completed
// result_1 f result_2 1 result_3 undefined
// f2 completed
// f3 completed

// -----------------------------------------------------------------------------------------------------
// approach 4
// -----------------------------------------------------------------------------------------------------
if (ques_4) {
    const promiseFuncs = [4, 5, 6].map(item => () => wait(item));
    console.log('promiseFuncs', promiseFuncs);
    Promise.all(promiseFuncs.map(f => f()))
        .then(([result1, result2, result3]) => {
            console.log('result', result1, result2, result3);
        })
        .catch((err) => {
            console.log('err', err);
        });
}

// promiseFuncs [ [Function], [Function], [Function] ]
// secs 4
// secs 5
// secs 6
// result 4 5 6
