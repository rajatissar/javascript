const my_variable = 'rajat';
const my_function = () => console.log('Hello');
const my_object = {
    first_name: 'rajat',
}


// exports = my_object; // will not work
// module.exports = my_variable;



module.exports.my_variable = my_variable;
module.exports.my_object = my_object;
module.exports.my_function = my_function;

// module.exports = {
//     my_variable,
//     my_object,
//     my_function
// }

// exports.my_variable = my_variable;
// exports.my_function = my_function;
// exports.my_object = my_object;

// exports = {
//     my_variable,
//     my_object,
//     my_function
// }