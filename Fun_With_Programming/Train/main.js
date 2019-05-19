let speed = 0;   // parametr od poruszania sie pociagu
let up = 0;   // parametr poruszania sie kolek
let time = 10;  // time do SetIntervala
let bolean = true; // flaga 
const train = [...document.querySelectorAll('.build')]  // pobiera wartosc wszystkich .build [... ] zmienia na tablice
const down = document.getElementById("test");  
const down1 = document.getElementById('buildv1');
const roundel = document.getElementById('text');
for (let i = 0; i < train.length; i++) {        // petla ktora zwieksza margines gorny  wszystkich  .build zeby pociag sie nie rozpysal
   train[i].style.marginTop = -40 + "px";
}
const a = () => {
    speed += 5;  
    down.style.marginLeft = speed + "px";
    return;
}
const b = () => {

    if (up < -23) {        
        bolean = false;
    } else if (up > -16) {
        bolean = true;
    }

    if (bolean == true) {
        up -= 1;
        return roundel.style.marginLeft = up + "px", roundel.style.marginTop = up + "px";
    } else {
        up += 1;
        return roundel.style.marginLeft = up + "px", roundel.style.marginTop = up + "px";
    }
}





setInterval(function(){    // wykonuje funkcje co dany czas
    a();
    b();
},time);
