const EventEmitter = require('events');

let myEventEmitter = new EventEmitter();

myEventEmitter.on('wroteCode', () => {
  console.log('Somebody wrote some code!');
});

myEventEmitter.on('wroteCode', () => {
  console.log('Busy building Node apps!');
});

myEventEmitter.on('wroteCode', (language) => {
  console.log(`Somebody wrote some ${language} code!`);
});

// myEventEmitter.emit('wroteCode');
myEventEmitter.emit('wroteCode', 'Javascript');
