const fun = (a, b, cb) => {
  if (a == b) {
    return cb(null, 'success');
  }
  console.log('process.argv', process.argv);
  return cb('a is not equal to b', null);
};

// success
fun(1, 1, (error, name) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Result:', name);
  }
});

// failure
fun(1, 2, (error, name) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Result:', name);
  }
});
