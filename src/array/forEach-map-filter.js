// forEach
const arr11 = [1, 2, 3, 4];
const arr12 = arr11.forEach(element => {
    return element + 1;
});
console.log('arr11', arr11); // [ 1, 2, 3, 4 ]
console.log('arr12', arr12); // undefined

// map
const arr21 = [1, 2, 3, 4];
const arr22 = arr21.map(element => {
    return element + 1;
});
console.log('arr21', arr21); // [ 1, 2, 3, 4 ]
console.log('arr22', arr22); // [ 2, 3, 4, 5 ]

// filter
const arr31 = [1, 2, 3, 4];
const arr32 = arr31.filter(element => {
    return element > 2;
});
console.log('arr31', arr31); // [ 1, 2, 3, 4 ]
console.log('arr32', arr32); // [3, 4]
