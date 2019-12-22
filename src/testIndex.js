import initDatepicker from './index.js';

console.log('Yo!');

document.addEventListener('DOMContentLoaded', () => {
  initDatepicker('testInput', {
    minYear: 1980,
    maxYear: 2020,
    initMonth: 'Apr',
    initYear: 1982,
  });
});
