const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

const toggleNav = () => {
  container.classList.toggle('show-nav');
}

open.addEventListener('click', toggleNav)
close.addEventListener('click', toggleNav)
