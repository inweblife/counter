let counter = document.getElementById('counter');
let count = 0;

document.getElementById('btnDec').addEventListener('click', () => {
  count--;
  counter.innerHTML = count;
});

document.getElementById('btnRes').addEventListener('click', () => {
  count;
  counter.innerHTML = 0;
});

document.getElementById('btnInc').addEventListener('click', () => {
  count++;
  counter.innerHTML = count;
});