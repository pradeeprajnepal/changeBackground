const backdrop= document.querySelector("body");
const button= document.querySelector(".btn");
const colors=["red","blue", "green", "yellow", "white","black","teal"];

backdrop.style.backgroundColor= "teal";
button.addEventListener("click",changeBackgrond);

function changeBackgrond(){
    const colorIndex=parseInt(Math.random()*colors.length);
    backdrop.style.backgroundColor=colors[colorIndex];
}

