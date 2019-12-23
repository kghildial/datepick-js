import initDatepicker from './index.js';

console.log('Yo!');

document.addEventListener('DOMContentLoaded', () => {
  initDatepicker('testInput', {
    minYear: 1980,
    maxYear: 2020,
    initDate: 19,
    initMonth: 'Apr',
    initYear: 1982,
    // onChange: value => {},
  });
});
