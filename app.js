/*
//              Random Number Generator                 //
const randomNumber = document.getElementById("display");
const btt = document.getElementById("btn");
//      What ties the Button to the function       //
btt.addEventListener('click', generatenumber);

function generatenumber()
{
    //          Generates the Number            //
    const randomnumber = Math.floor(Math.random() * 100 + 1);
    console.log(randomnumber);
    document.getElementById("display").textContent = randomnumber;
}
*/

//              Random Color Generator                //
const display = document.getElementById("display"); 
const button = document.getElementById("btn");

//         What ties the Button to the function     //
button.addEventListener("click", GenerateColor)

function GenerateColor()
{
    //      Connects the Colors Together       //
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    //    This is String for the Color Generator   //
    let color = "rgb(" + r + "," + g +"," + b + ")";

    display.style.backgroundColor = color; 
}

/*setInterval(GenerateColor, 1000);*/
