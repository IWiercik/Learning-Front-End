const slideList = [{
        img: "images/img1.jpg",
        text: 'Pierwszy tekst'
    },
    {
        img: "images/img2.jpg",
        text: 'Drugi tekst'
    },
    {
        img: "images/img3.jpg",
        text: 'Trzeci tekst'
    }
];

const image = document.querySelector('img.slider'); // pobiera img
const h1 = document.querySelector('h1.slider'); // pobiera h1
const dots = [...document.querySelectorAll('.dots span')] // tworzy tablice kropek
// Interfejs
const time = 3000; // czas
let active = 0; // zmienna ktora wyznacza nam numer slajdu

// Implementacje



const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot()
}
let refresh = setInterval(changeSlide, time);
const keyChangeSlide = (e) => {

    if (e.keyCode == 37) {
        active--;
        if (active < 0) {
            active = slideList.length - 1;
        }
    } else if (e.keyCode == 39) {
        active++;
        if (active === slideList.length) {
            active = 0;
        }
    }
    clearInterval(refresh);
    image.src = slideList[active].img,
        h1.textContent = slideList[active].text;
    changeDot();


    refresh = setInterval(changeSlide, time);
}




// utwórz funkcje keyChangeSlide. Zadanie może wymagać także zmian poza funkcją.
window.addEventListener('keydown', keyChangeSlide)