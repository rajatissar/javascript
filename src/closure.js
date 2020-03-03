const outer_function = (a) => {
    return function (b) {
        console.log(`a = ${a}`);
        return a + b;
    }
}

const inner_function = outer_function(10);
console.log(`inner_function = ${inner_function}`);

const inner_function_result = inner_function(1);
console.log(`inner_function_result = ${inner_function_result}`);