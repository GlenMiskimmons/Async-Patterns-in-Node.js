function *generatorFunction() {
  console.log('Generator Function is running');

  let x = 5;
  yield x;

  x++;
  y = yield x;
  return x + y;
}

let iterator = generatorFunction();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next(4));

console.log('All done!');
