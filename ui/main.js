console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='abhi listen';
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+50;
    img.style.marginLeft=marginLeft+'px';
     marginLeft=marginLeft-19;
     img.style.marginLeft=marginLeft+'px';
}
img.onclick=function()
{
    var interval=setInterval(moveRight,80);
  
};