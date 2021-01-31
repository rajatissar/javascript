const ques_1 = true;
const ques_2 = false;
const ques_3 = false;

const fun_returning_promise = (par = 1) => {
  return new Promise((resolve, reject) => {
    try {
      if (par === 1) {
        resolve('success');
      } else {
        reject(new Error('value is not 1'));
      }
    } catch (err) {
      console.log('try catch', err);
      reject(new Error('value is not 1'));
    }
  });
};

const fun_returning_promise_2 = () => {
  return new Promise((resolve, reject) => {
    world;
    resolve();
  });
};

// ------------------------------------------------------------------------------------------------
// promise_returning_success
// ------------------------------------------------------------------------------------------------
if (ques_1) {
  fun_returning_promise(1)
    .then((success) => {
      console.log('promise_returning_success -> successHandler', success);
      hello; // custom error
    }, (error) => {
      console.log('promise_returning_success -> errorHandler', error);
    }
    )
    .catch((err) => {
      console.log('promise_returning_success -> catch', err);
    });
}

// ------------------------------------------------------------------------------------------------
// promise_returning_error
// ------------------------------------------------------------------------------------------------
if (ques_2) {
  fun_returning_promise(2)
    .then((success) => {
      console.log('promise_returning_error -> successHandler', success);
      hello; // custom error
    }, (error) => {
      console.log('promise_returning_error -> errorHandler', error);
    }
    )
    .catch((err) => {
      console.log('promise_returning_error -> catch', err);
    });
}

// ------------------------------------------------------------------------------------------------
// UnhandledPromiseRejectionWarning:
// ------------------------------------------------------------------------------------------------
if (ques_3) {
  fun_returning_promise_2()
    .then((data) => {
      console.log('fun_returning_promise_2', data);
    });
}
