// [ ][  ]  Pozwala nam wybrac ktora ma byc 

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ["lorem", "ipsum del","dziala "]

let index = 0; // zmienne na ktorych  operujemy      ta zmienna sprawdza nam index tablicy czyli w ktorym miejscu jest dany wyraz
let indexText = 0; // ta zmienna sprawdza nam  indexy  slow w tablicy

const addLetter = () => { // funkcja strzalkowa
    const indexTyping = setInterval(function () { // set interval odswierza strone

        if (index == 0) { // index 0 - lorem
            spnText.textContent += txt[index][indexText++]; // zamienia nam zawartosc textowa  tesktu na [1 index] [zwieksza sie caly czas index tych liter ktore sie pisza]
            if (indexText === txt[index].length + 1) { // jesli index jest rowny   ilosci liter     
                return spnText.textContent = "", index = 1, indexText = 0; // wtedy zmienia nam na index 1 i  index textu na = 0  zeby pisalo od nowa
            }
        } else if (index == 1) { // index- pierwszy czyli sit      
            spnText.textContent += txt[index][indexText++];
            if (indexText === txt[index].length + 1) { // same
                return spnText.textContent = "", index = 2, indexText = 0; // tu zmienia na index 2  bo   drugi wyraz
            }

        } else if (index == 2) { // index - drugi czyli adipiscing
            spnText.textContent += txt[index][indexText++];
            if (indexText === txt[index].length + 1) { // same

                return spnText.textContent = "", index = 0, indexText = 0;
            }


        }

    }, 250) // to jest timer nie pamietam ile to jest sekund :D

}
addLetter(); //pierwsze wywołanie

// Animacja kursora 
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);