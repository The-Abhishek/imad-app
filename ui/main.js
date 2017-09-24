console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='abhi listen';
var img=document.getElementById('madi');
var ml=0;
function moveRight()
{
    ml=ml+6;
    img.style.ml=ml+'px';
}
img.onclick=function()
{
    var interval=setInterval(moveRight,80);
  
};