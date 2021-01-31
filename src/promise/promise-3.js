const ques_1 = false;
const ques_2 = false;
const ques_3 = false;
const ques_4 = false;
const ques_5 = false;

const foo = () => {
  console.log('foo started');
  return new Promise((resolve) => {
    console.log('foo timeout before');
    setTimeout(() => {
      console.log('foo timeout');
      resolve('foo resolved');
    }, 1000);
    console.log('foo timeout after');
  });
};
const bar = () => {
  console.log('bar started');
  return new Promise((resolve) => {
    console.log('bar timeout before');
    setTimeout(() => {
      console.log('bar timeout');
      resolve('bar resolved');
    }, 4000);
    console.log('bar timeout after');
  });
};

// ques 1
if (ques_1) {
  foo()
    .then((result) => {
      console.log('inside foo then 1: ', result);
      bar(); // If we omit return statement, then it does not wait for promise to resolved and we get undefined in next then
    })
    .then((result) => {
      console.log('inside foo then 2: ', result);
    });
}

// foo started
// foo timeout before
// foo timeout after
// foo timeout
// inside foo then 1:  foo resolved
// bar started
// bar timeout before
// bar timeout after
// inside foo then 2:  undefined
// bar timeout

// ques 2
if (ques_2) {
  foo()
    .then((result) => {
      console.log('inside foo then 1: ', result);
      return bar();
    })
    .then((result) => {
      console.log('inside foo then 2: ', result);
    });
}

// foo started
// foo timeout before
// foo timeout after
// foo timeout
// inside foo then 1:  foo resolved
// bar started
// bar timeout before
// bar timeout after
// bar timeout
// inside foo then 2:  bar resolved

// ques 3
if (ques_3) {
  foo()
    .then(bar)
}

// foo started
// foo timeout before
// foo timeout after
// foo timeout
// bar started
// bar timeout before
// bar timeout after
// bar timeout

// ques 4
if (ques_4) {
  foo()
    .then(bar())
    .then((result) => {
      console.log('inside then 1: ' + result);
    })
    .then((result) => {
      console.log('inside then 2: ' + result);
    });
}

// foo started
// foo timeout before
// foo timeout after
// bar started
// bar timeout before
// bar timeout after
// foo timeout
// inside then 1: foo resolved
// inside then 2: undefined
// bar timeout

// ques 5
if (ques_5) {
  foo()
    .then(bar())
    .then((result) => {
      console.log('inside then 1: ' + result);
      return 'send_to_then';
    })
    .then((result) => {
      console.log('inside then 2: ' + result);
    });
}

// foo started
// foo timeout before
// foo timeout after
// bar started
// bar timeout before
// bar timeout after
// foo timeout
// inside then 1: foo resolved
// inside then 2: send_to_then
// bar timeout
