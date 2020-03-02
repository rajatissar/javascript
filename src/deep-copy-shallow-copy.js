// object
const person_1 = {
    name: 'rajat',
    address: {
        city: 'tokyo',
    }
};

const person_2 = {
    name: 'sergio',
    address: {
        city: 'berlin',
    }
};

const person_3 = {
    name: 'lestrade',
    address: {
        city: 'nairobi',
    }
};

const person_4 = {
    name: 'professor',
    address: {
        city: 'moscow',
    }
};

// shallow_copy starts
console.log('shallow_copy starts')
const shallow_copy = person_1;
shallow_copy.name = 'parashar';
console.log(`person_1.name = ${person_1.name}`); // parashar
console.log(`shallow_copy.name = ${shallow_copy.name}`); // parashar
shallow_copy.address.city = 'rio';
console.log(`person_1.address.city = ${person_1.address.city}`); // rio
console.log(`shallow_copy.address.city = ${shallow_copy.address.city}`); // rio
console.log('shallow copy ends\n')
// shallow_copy ends

// deep_copy starts
// method_1: spread operator
console.log('deep_copy_by_spread_operator_on_object starts')
const deep_copy_by_spread_operator_on_object = { ...person_2 };
deep_copy_by_spread_operator_on_object.name = 'parashar';
console.log(`person_2.name = ${person_2.name}`); // sergio
console.log(`deep_copy_by_spread_operator_on_object.name = ${deep_copy_by_spread_operator_on_object.name}`); // parashar
deep_copy_by_spread_operator_on_object.address.city = 'rio';
console.log(`person_2.address.city = ${person_2.address.city}`); // rio
console.log(`deep_copy_by_spread_operator_on_object.address.city = ${deep_copy_by_spread_operator_on_object.address.city}`); // rio
console.log('deep_copy_by_spread_operator_on_object ends\n')

// method_2: Object.assign()
console.log('deep_copy_by_object_assign_on_object starts')
const deep_copy_by_object_assign_on_object = Object.assign({}, person_3);
deep_copy_by_object_assign_on_object.name = 'parashar';
console.log(`person_3.name = ${person_3.name}`); // lestrade
console.log(`deep_copy_by_object_assign_on_object.name = ${deep_copy_by_object_assign_on_object.name}`); // parashar
deep_copy_by_object_assign_on_object.address.city = 'rio';
console.log(`person_3.address.city = ${person_3.address.city}`); // rio
console.log(`deep_copy_by_object_assign_on_object.address.city = ${deep_copy_by_object_assign_on_object.address.city}`); // rio
console.log('deep_copy_by_object_assign_on_object ends\n');

// method_3: JSON.parse(JSON.stringify())
console.log('deep_copy_by_json_on_object starts')
const deep_copy_by_json_on_object = JSON.parse(JSON.stringify(person_4));
deep_copy_by_json_on_object.name = 'parashar';
console.log(`person_4.name = ${person_4.name}`); // professor
console.log(`deep_copy_by_json_on_object.name = ${deep_copy_by_json_on_object.name}`); // parashar
deep_copy_by_json_on_object.address.city = 'rio';
console.log(`person_4.address.city = ${person_4.address.city}`); // moscow
console.log(`deep_copy_by_json_on_object.address.city = ${deep_copy_by_json_on_object.address.city}`); // rio
console.log('deep_copy_by_json_on_object ends\n')
// deep_copy ends



// array
const array_1 = [11, [12, 13]];
const array_2 = [21, [22, 23]];
const array_3 = [31, [32, 33]];
const array_4 = [41, [42, 43]];


// shallow_copy starts
console.log('shallow_copy starts')
const shallow_copy_array = array_1;
shallow_copy_array[0] = '101';
console.log(`array_1[0] = ${array_1[0]}`); // 101
console.log(`shallow_copy_array[0] = ${shallow_copy_array[0]}`); // 101
shallow_copy_array[1] = 102;
console.log(`array_1[1] = ${array_1[1]}`); // 102
console.log(`shallow_copy_array[1] = ${shallow_copy_array[1]}`); // 102
console.log('shallow copy ends\n');
// shallow_copy ends

// deep_copy starts
// method_1: spread operator
console.log('deep_copy_by_spread_operator_on_array starts')
const deep_copy_by_spread_operator_on_array = [...array_2];
deep_copy_by_spread_operator_on_array[0] = '101';
console.log(`array_2[0] = ${array_2[0]}`); // 21
console.log(`deep_copy_by_spread_operator_on_array[0] = ${deep_copy_by_spread_operator_on_array[0]}`); // 101
deep_copy_by_spread_operator_on_array[1] = 102;
console.log(`array_2[1] = ${array_2[1]}`); // 22,23
console.log(`deep_copy_by_spread_operator_on_array[1] = ${deep_copy_by_spread_operator_on_array[1]}`); // 102
console.log('deep_copy_by_spread_operator_on_array ends\n');

// method_2: Object.assign()
console.log('deep_copy_by_object_assign_on_array starts')
const deep_copy_by_object_assign_on_array = Object.assign([], array_3);
deep_copy_by_object_assign_on_array[0] = '101';
console.log(`array_3[0] = ${array_3[0]}`); // 31
console.log(`deep_copy_by_object_assign_on_array[0] = ${deep_copy_by_object_assign_on_array[0]}`); // 101
deep_copy_by_object_assign_on_array[1] = 102;
console.log(`array_3[1] = ${array_3[1]}`); // 32,33
console.log(`deep_copy_by_object_assign_on_array[1] = ${deep_copy_by_object_assign_on_array[1]}`); // 102
console.log('deep_copy_by_object_assign_on_array ends\n')

// method_3: JSON.parse(JSON.stringify())
console.log('deep_copy_by_json_on_array starts')
const deep_copy_by_json_on_array = JSON.parse(JSON.stringify(array_4));
deep_copy_by_json_on_array[0] = '101';
console.log(`array_4[0] = ${array_4[0]}`); // 41
console.log(`deep_copy_by_json_on_array[0] = ${deep_copy_by_json_on_array[0]}`); // 101
deep_copy_by_json_on_array[1] = 102;
console.log(`array_4[1] = ${array_4[1]}`); // 42,43
console.log(`deep_copy_by_json_on_array[1] = ${deep_copy_by_json_on_array[1]}`); // 102
console.log('deep_copy_by_json_on_array ends\n')
// deep_copy ends
