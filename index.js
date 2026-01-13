var random1=Math.floor(Math.random()*6)+1;
var random2=Math.floor(Math.random()*6)+1;

document.querySelector(".img1").setAttribute("src","./images/dice"+random1+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+random2+".png");

if(random1>random2){
    document.querySelector("h1").innerText="Player 1 won";
}else if(random2>random1){
    document.querySelector("h1").innerText="Player 2 won";
}else{
    document.querySelector("h1").innerText="Draw";
    }