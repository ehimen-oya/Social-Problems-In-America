const container = document.querySelector(".container")
const card = document.querySelector(".card")

const united = document.querySelector(".united");
const information = document.querySelector(".information");
const title = document.querySelector('.title');
const links = document.querySelector('.link');
const share = document.querySelector('.share');

container.addEventListener('mousemove', function (e) {
    let x_axis = (window.innerWidth / 2 - e.pageX) / 10;
    let y_axis = (window.innerWidth / 2 - e.pageY) / 10;
    card.style.transform = `rotateY(${x_axis}deg) rotateX(${y_axis}deg)`
});