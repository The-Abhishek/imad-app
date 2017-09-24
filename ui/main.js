console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='abhi listen';
var img=document.getElementById('madi');
var marginLeft=0;var marginRight=0;
function moveRight()
{
    marginLeft=marginLeft+6;
    img.style.marginLeft=marginLeft+'px';
}
function moveLeft()
{
    marginRight=marginRight+6;
    img.style.marginRight=marginRight+'px';
}
img.onclick=function()
{
    var interval=setInterval(moveRight,80);
    var interval1=setInterval(moveLeft,80);
  
};