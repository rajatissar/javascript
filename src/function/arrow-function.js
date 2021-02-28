var highValue = 200;
var myObj = {
    highValue: 20,
    calculateIt: function () {
        console.log('calculateIt this', this.highValue); // 20
    },
    calculateItTimer1: function () {
        that = this;
        setTimeout(function () {
            console.log('calculateItTimer1 this', this.highValue); // undefined OR 200
            console.log('calculateItTimer1 that', that.highValue); // 20
        }, 1000);
    },
    calculateItTimer2: () => {
        that = this;
        setTimeout(() => {
            console.log('calculateItTimer2 this', this.highValue); // undefined OR 200
            console.log('calculateItTimer2 that', that.highValue); // undefined OR 200
        }, 2000);
    },
    calculateItTimer3: function () {
        that = this;
        setTimeout(() => {
            console.log('calculateItTimer3 this', this.highValue); // 20
            console.log('calculateItTimer3 that', that.highValue); // 20
        }, 3000);
    },
    calculateItTimer4: () => {
        that = this;
        setTimeout(function () {
            console.log('calculateItTimer4 this', this.highValue); // undefined OR 200
            console.log('calculateItTimer4 that', that.highValue); // undefined OR 200
        }, 4000);
    },
};
setTimeout(() => {
    console.log('outside this', this.highValue); // undefined OR 200
}, 5000);

myObj.calculateIt();
myObj.calculateItTimer1();
// myObj.calculateItTimer2();
// myObj.calculateItTimer3();
// myObj.calculateItTimer4();
