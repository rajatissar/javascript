const wait = (milli_sec) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(milli_sec);
        }, milli_sec);
    })
};

// approach_1: resolving promise by then / catch
wait(2000)
    .then((result) => {
        console.log('result', result);
        return wait(4000)
    })
    .then((result2) => {
        console.log('result2', result2);
    });

// approach_2: resolving promise by async / await 
const async_await_wrapper = async () => {
    const result = await wait(1000);
    console.log('async_await_wrapper inside -> result', result);
    return result;
};
async_await_wrapper();
