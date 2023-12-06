const ham = document.querySelector('.ham')
const nav = document.querySelector('.nav_modal')
const standOut = document.querySelector('.stand')
const standOut1 = document.querySelector('.stand1')


ham.addEventListener('click', function(){
    nav.classList.toggle("hidden")
})

const screen = window.outerWidth
console.log(screen);
if(screen <= 600) {
    standOut.classList.remove('stand_out')
    standOut1.classList.remove('stand_out1')
}