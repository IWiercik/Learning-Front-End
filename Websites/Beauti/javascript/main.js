function   responsive(x){                 /*     Tem x jest od tego zeby ci cos tam dalo w naszym przypaadku jest to  sections panel      */ 
    var panel = document.getElementById(x), przycisk= document.getElementById("przycisk"), maxW="230px" ;
    if (panel.style.width == maxW){
        panel.style.width = "0px";
        przycisk.innerHTML = "<b>"+ "&#8801;" + "</b>";
        przycisk.style.fontSize = "60px";
        przycisk.style.marginLeft = "55px";
    } else {
        panel.style.width = maxW;
        przycisk.innerHTML = "<b>"+ "&#8801;" + "</b>";
        przycisk.style.fontSize = "60px";
        przycisk.style.marginLeft = "180px";
    }
}
function scroll_AboutUs(){
    window.scroll(0,1012);
}


function scroll_Project(){
    window.scroll(0,0);
}
function scroll_Contact(){
    window.scroll(0,3000);
}

