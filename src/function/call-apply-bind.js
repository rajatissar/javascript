// Global Scope
console.log('Global Scope this', this);

const person1 = {
    firstName: 'Samrat',
    lastName: 'Sharma',
    fullName: function (hometown, state) {
        return `${this.firstName} ${this.lastName} from ${hometown}, ${state}`;
    }
};
const person2 = {
    firstName: 'Rajat',
    lastName: 'Kumar',
};
const fullName2 = function (hometown, state) {
    return `${this.firstName} ${this.lastName} from ${hometown}, ${state}`;
};


// -------------------------------------------------------------------------
// call (function borrowing) (invoke function)
const nameOfPerson = person1.fullName.call(person2, 'Ambala', 'Haryana');
console.log('nameOfPerson1', nameOfPerson);
const nameOfPerson2 = fullName2.call(person1, 'Mohali', 'Punjab');
console.log('nameOfPerson2', nameOfPerson2);


// -------------------------------------------------------------------------
// apply (function borrowing) (invoke function)
const nameOfPerson3 = person1.fullName.apply(person2, ['Ambala', 'Haryana']);
console.log('nameOfPerson3', nameOfPerson);
const nameOfPerson4 = fullName2.apply(person1, ['Mohali', 'Punjab']);
console.log('nameOfPerson4', nameOfPerson2);

// -------------------------------------------------------------------------
// bind (function borrowing) (does not invoke just return copy of function)
const nameOfPerson5 = person1.fullName.bind(person2, ['Ambala', 'Haryana']);
console.log('nameOfPerson5', nameOfPerson5());
const nameOfPerson6 = fullName2.bind(person1, ['Mohali', 'Punjab']);
console.log('nameOfPerson6', nameOfPerson6());
