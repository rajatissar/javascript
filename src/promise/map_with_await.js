const wait = (sec) => {
    console.log('started', sec);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('end', sec);
            if (sec === 3) {
                reject(sec)
            } else {
                resolve(sec);
            }
        }, sec * 1000);
    });
};

const arr = [1, 5, 3, 4];

// approach_1
const executed_promise_array = arr.map((item) => wait(item)); // Promise get called here

// approach_2
const promise_array = arr.map((item) => () => wait(item)); // Promise not get called here
console.log('promise_array', promise_array);
Promise.all(promise_array.map((promise_fun) => promise_fun()))
    .then((result) => {
        console.log('Promise.all -> result', result);
    })
    .catch((error) => {
        console.log('Promise.all -> error', error);
    });
