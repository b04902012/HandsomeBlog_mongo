window.addEventListener('load',function(event){
	var div_editor=document.getElementById('div_editor');
	var input_title=document.getElementById('input_title');
    var input_content=document.getElementById('input_content');
    var input_tag=document.getElementById('input_tag');
    var span_tag=document.getElementById('span_tag')
    var tag=[];
    var div_preview=document.getElementById('div_preview');
    input_title.onblur=input_blur;
    input_content.onblur=input_blur;
    input_tag.onblur=input_blur;
    input_title.onfocus=input_focus;
    input_content.onfocus=input_focus;
    input_tag.onfocus=input_focus;
    input_tag.addEventListener('keydown',function(event){
        if(
            event.keyCode!==13||
            input_tag.value===''
        ){
            return;
        }
        span_tag.innerHTML+=input_tag.value;
        tag.push(input_tag.value);
        input_tag.value='';
    })

    function input_focus(){
    	div_editor.style.opacity='0.9';
    }
    function input_blur(){
    	div_editor.style.opacity='0.1';
        var object={
            title:input_title.value,
            id:'0',
            user:'Handsome Liu',
            num_time:new Date().getTime(),
            content:input_content.value,
            tag:tag
        }
    	div_preview.innerHTML=dom_module(object).innerHTML;
    }
})
