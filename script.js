const plus = document.querySelectorAll('.plus');
const text = document.querySelectorAll('.text');
const h3 = document.querySelectorAll('h3');
const block = document.querySelectorAll('.block');

 block.forEach((btn, i) => {
     btn.addEventListener('click', () => {       
        plus[i].classList.toggle('open-list');
        text[i].classList.toggle('open-text');
        h3[i].classList.toggle('head-color');
     })
  });
