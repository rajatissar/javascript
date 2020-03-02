# Javascript

## 1. module

### Links

- [export](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export/)

- [import](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/import)

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

## 2. deep_copy and shallow_copy

### Links for deep_copy and shallow_copy

- [Link 1](https://medium.com/free-code-camp/copying-stuff-in-javascript-how-to-differentiate-between-deep-and-shallow-copies-b6d8c1ef09cd)

### Methods

- spread operator, Object.assign()n, JSON.parse(JSON.stringify()) do deep copy on array and object
- spread operator, Object.assign() does not do deep copy of nested object but JSON.parse(JSON.stringify()) do deep copy of nested objects on object
- spread operator, Object.assign(), JSON.parse(JSON.stringify()) do deep copy of nested array element on array
