const selectInpt = document.getElementById("firstSelector");
const secondSelectedInpt = document.getElementById("secondSelector");
const field = document.getElementById('pole');
const  secondField = document.getElementById("field");
//const tab = [mm = 0.1, cm = 1, dm = 10, m = 100, km = 1000];
let index = 0;
let secondIndex = 0;
selectInpt.addEventListener("change", indexOfFirstSelector);
secondSelectedInpt.addEventListener("change", indexOfSecondSelector);

function indexOfFirstSelector() {
    const firstSelectIndex = this.selectedIndex;
     index = firstSelectIndex ;
    return test();
    
}

function indexOfSecondSelector() {
    const secondSelectIndex = this.selectedIndex;
     secondIndex = secondSelectIndex;
    return test();

}

function test(){
    let valu = field.value;
    console.log(valu);
   //if (index <= secondIndex){
        let wynik = index-secondIndex;
        let result =  valu * (Math.pow(10,wynik));
     //   result = Math.floor(result*10)/100;
     //result = result.toFixed(valu.length);
     console.log(result);
    secondField.value = result;
   // }
   // else if(index > secondIndex){

   //  }








    // switch(secondIndex){
    //     case 0:
        
    //     console.log(index);
    //     break;
    //     case 1:

    //     console.log(index);
    //     break;
    //     case 2:

    //     console.log(index);
    //     break;
    //     case 3:

    //     console.log(index);
    //     break;
    //     case 4:

    //     console.log(index);
    //     break;
    //     default:
    //     console.log("aaa");
        
    // }
}
