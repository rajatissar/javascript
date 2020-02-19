# Javascript

## 1. module

### ES5

If you wants to exports only one variable / object

```JS
module.exports = my_object;
exports = my_object; // will not work
```

If you wants to exports multiple things as object

```JS
module.exports.my_variable = my_variable;
module.exports.my_object = my_object;
module.exports.my_function = my_function;

module.exports = {
    my_variable,
    my_object,
    my_function
}

exports.my_variable = my_variable;
exports.my_function = my_function;
exports.my_object = my_object;

// Below will not work
exports = {
    my_variable,
    my_object,
    my_function
}
```

- We can not use both `module.exports` and `exports` at once in our file (import).

## ES6

- We can use `export default` only once in our file.

```JS
export default my_variable
```

- If we want to export more than 1 variable / object then we can use `export`

```JS
export { my_variable, my_function };
```

- We can use both `export default` and `export` at once in our file.