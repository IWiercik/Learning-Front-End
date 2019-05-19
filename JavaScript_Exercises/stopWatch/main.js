const startButton = document.querySelector('button.main');
const restartButton = document.querySelector('button.reset');
const  string = document.querySelector('.time div');
let seconds = 0;
let interval;
let flag = false;
const timeStart = () =>{
  if(!flag){

    flag = !flag;
    seconds ++;
    startButton.textContent = "pauza";
   interval = setInterval(start,10)

  }
  else {
    flag = !flag;
    seconds ++;
    startButton.textContent = "start";
    clearInterval(interval)

  }
}
   const start = () =>{
     seconds ++;
     string.textContent = (seconds/100).toFixed(2);
   } 
        
const timeReset = () =>{
  seconds = 0;
  flag = false;
 clearInterval(interval);   
string.textContent = "---";

}


startButton.addEventListener("click",timeStart);
restartButton.addEventListener("click",timeReset);
