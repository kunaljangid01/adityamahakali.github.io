const text = document.getElementById("heading");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for(let i = 0; i < splitText.length; i++) {
text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 100);

function onTick(){
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++ 
  if(char === splitText.length){
    complete();
    return;
  }
}

function complete(){
  clearInterval(timer);
  timer = null;
}

document.onscroll=function(){  
    let r = Math.floor(Math.random()*155);
    let g = Math.floor(Math.random()*155);
    let b = Math.floor(Math.random()*155);
   // console.log(r,g,b);
    document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")";
}
