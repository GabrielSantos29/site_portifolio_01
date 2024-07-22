function rolar(){
    var obj = event.target.dataset.nome;
    console.log(obj);
    document.getElementById(obj).scrollIntoView();
}
document.getElementById("btn1").addEventListener("click",rolar);
document.getElementById("btn2").addEventListener("click",rolar);
document.getElementById("btn3").addEventListener("click",rolar);
document.getElementById("btn4").addEventListener("click",rolar);