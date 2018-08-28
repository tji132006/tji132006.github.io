const menuBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('.menu');
const menuLeft = document.querySelector('.menu-left');
const menuRight = document.querySelector('.menu-right');
const navItem = document.querySelectorAll('.nav-item');


menuBtn.addEventListener('click', function () { 
   
    menuBtn.classList.toggle('close');
    menu.classList.toggle('show');
    menuLeft.classList.toggle('show');
    menuRight.classList.toggle('show');
    navItem.forEach(item => item.classList.toggle('show'));
    
})