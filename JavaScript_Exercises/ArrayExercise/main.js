const arr = []; // tablica z możliwymi radami
const add = document.querySelector('.add'); // pobieramy przycisk za pomoca classy add
const reset = document.querySelector('.clean'); // pobieramy przycisk za pomoca classy clean
const showMessages = document.querySelector('.showAdvice'); // pobieramy przycisk za pomoca classy showAdvice
const alertArr = document.querySelector('.showOptions') // pobieramy przycisk za pomoca classy showOptions


const addArray = (e) => {
    e.preventDefault() // nie odswieza nam sie strona
    const inpt = document.querySelector('input'); // pobieramy inputa
    const name = inpt.value; // pobieramy jego wartosc
    arr.push(name); // wkladam do tablicy jego wartosc (name)
    console.log(arr); // wyswietlamy w konsoli tablice
}

const cleanArray = (e) => {
    e.preventDefault();
    arr.length = 0; // usuwamy zawwartosc tablicy 
    console.log(arr)

}

const showArray = (e) => {
    e.preventDefault();
    const random = Math.floor(Math.random() * arr.length); // zmienna przetrzymuje nam zaokraglenie (floor) losowosc (random) * dlugosc tablicy czyli ile jest tam rzeczy
    document.querySelector("h1").textContent = arr[random]; // pobieramy h1 i wkladamy  w jego textContent index tablicy ktory ma sie wyswietlic
    console.log(random)
}


const alerting = (e) => {
    e.preventDefault();
    alert(arr);
}

add.addEventListener("click", addArray); // Tutaj sa same wywolania
reset.addEventListener("click", cleanArray)
showMessages.addEventListener("click", showArray)
alertArr.addEventListener("click", alerting)