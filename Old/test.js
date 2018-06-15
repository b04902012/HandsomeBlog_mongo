window.addEventListener('load',function(event){
var a=document.getElementById('a');
var b=document.getElementById('b');
var show=document.getElementById('show');
a.onblur=function(){
	show.innerHTML+='1Blur<br>'
}
a.onfocus=function(){
	show.innerHTML+='1Focus<br>'
}
b.onblur=function(){
	show.innerHTML+='2Blur<br>'
}
b.onfocus=function(){
	show.innerHTML+='2Focus<br>'
}
})