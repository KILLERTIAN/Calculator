const btntoggle = document.querySelector('.bg-change');
const dwtoggle = document.querySelector('body');
const calshadow = document.querySelector('.calculator');
const mainbox = document.querySelector('.buttons')
const spanshadow = document.getElementsByTagName('span');

btntoggle.addEventListener('click', () => {
    btntoggle.classList.toggle('active');
    dwtoggle.classList.toggle('active');
    calshadow.classList.toggle('active');
    spanshadow.classList.toggle('active');
    mainbox.classList.toggle('active');
})