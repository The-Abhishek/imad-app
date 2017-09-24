console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='abhi listen';
var img=document.getElementById('madi');
var mLeft=0;
function moveRight()
{
    mLeft=mLeft+10;
    img.style.marginLeft='100px';
}
img.onclick=function()
{
    var interval=setInterval(moveRight,100);
  
};