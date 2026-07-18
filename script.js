document.addEventListener("DOMContentLoaded",()=>{

const btn=document.getElementById("startBtn");

btn.addEventListener("click",()=>{

document.body.style.transition="1s";

document.body.style.opacity="0";

setTimeout(()=>{

window.location.href="#halaman1";

document.body.style.opacity="1";

},900);

});

});
