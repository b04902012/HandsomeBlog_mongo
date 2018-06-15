window.addEventListener('load',function(){
    var header=document.getElementById('header');
    var div_title=document.createElement('div');
    var a_title=document.createElement('a');
    
    a_title.setAttribute('href','./index.html');
    a_title.appendChild(div_title);
    a_title.style.width='100%';
    div_title.style.width='100%';
    div_title.style.backgroundColor='#000';
    div_title.style.textAlign='center';
    div_title.style.fontFamily='Serif';
    div_title.style.fontSize='60px'; 
    div_title.innerHTML='Handsome Liu';
    header.appendChild(a_title);
})
