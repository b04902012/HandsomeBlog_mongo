/*object{
    id
    title
    num_time
    content
    tag
}

*/
window.addEventListener('load',function(event){
    dom_module=function(object){
        var result=document.createElement('div');
        var page_title=document.createElement('div');
        page_title.setAttribute('class','page_title');
        var page_content=document.createElement('div');
        page_content.setAttribute('class','page_content')
        var page_footer=document.createElement('div');
        page_footer.setAttribute('class','page_footer');
        var page_time;
        var page_tag=document.createElement('div');
        page_tag.setAttribute('class','page_tag');
        printTitle();
        printTag();
        printTime();
        printFooter();
        printContent();
        result.appendChild(page_title);
        result.appendChild(page_tag);
        result.appendChild(page_content);
        result.appendChild(page_footer);
        return result;
        function printTitle(){
            var a=document.createElement('a');
            a.innerHTML=object.title;
            a.setAttribute('href','./'+pad(object.id,4));
            page_title.appendChild(a);
        }
        function printTag(){
            page_tag.innerHTML+='Tags:';
            for(var index=0;index<object.tag.length;index++){
                var a=document.createElement('a');
                a.innerHTML=object.tag[index];
                a.setAttribute('class','tag');
                page_tag.appendChild(a);
                page_tag.innerHTML+=' ';
            }
        }
        function printTime(){
            var time=new Date();
            time.setTime(object.num_time);
            page_time=
                time.getFullYear()+'.'+
                pad(time.getMonth()+1,2)+'.'+
                pad(time.getDate(),2)+' '+
                pad(time.getHours(),2)+':'+
                pad(time.getMinutes(),2)+':'+
                pad(time.getSeconds(),2);
        }
        function printFooter(){
            page_footer.innerHTML='By '+object.user+' at '+page_time;
        }
        function printContent(){
            page_content.innerHTML=object.content;
        }
        function pad(number, digit){
            number=''+number;
            while(number.length<digit){
                number='0'+number;
            }
            return number;
        }
    }
})