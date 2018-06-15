window.addEventListener('load',function(event){
    var page_title=document.getElementById('page_title');
    var page_content=document.getElementById('page_content');
    var page_comment=document.getElementById('page_comment');
    var page_user=document.getElementById('page_user');
    var page_time=document.getElementById('page_time');
    var page_tag=document.getElementById('page_tag');
    printTitle();
    printTag();
    printUser();
    printTime();
    printContent();


    function printTitle(){
        var id=9;
        var title='Title';
        var a=document.createElement('a');
        a.innerHTML=title;
        a.setAttribute('href','./'+pad(id,4));
        page_title.appendChild(a);
    }
    function printTag(){
        var tag=['Informatics','Mathematics','Music'];
        page_tag.innerHTML+='Tags:';
        for(var index=0;index<tag.length;index++){
            var a=document.createElement('a');
            a.innerHTML=tag[index];
            a.setAttribute('class','tags');
            page_tag.appendChild(a);
            page_tag.innerHTML+=' ';
        }
    }
    function printUser(){
        var user='Handsome Liu';
        page_user.innerHTML=user;
    }
    function printTime(){
        var test_time=new Date();
        var num_time=Date.parse(test_time);
        var time=new Date();
        time.setTime(num_time);
        page_time.innerHTML=
            time.getFullYear()+'.'+
            pad(time.getMonth()+1,2)+'.'+
            pad(time.getDate(),2)+' '+
            pad(time.getHours(),2)+':'+
            pad(time.getMinutes(),2)+':'+
            pad(time.getSeconds(),2);
    }
    function printContent(){
        var content='content';
        page_content.innerHTML=content;
    }
    function pad(number, digit){
        number=''+number;
        while(number.length<digit){
            number='0'+number;
        }
        return number;
    }
})
