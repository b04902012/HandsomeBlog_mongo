window.addEventListener('load',function(){
    console.log("!!!!");
    var input_username_register=document.getElementById('input_username_register');
    var input_password_register=document.getElementById('input_password_register');
    var input_confirmpassword_register=document.getElementById('input_confirmpassword_register');
    input_confirmpassword_register.onpaste=function(){
        return false;
    }
    username_valid();
    password_valid();
    confirmpassword_valid();
    function username_valid(){
        input_username_register.addEventListener('input',function(){
            var value=input_username_register.value;
            var span=document.getElementById('span_username_validity_register');
            if(valid_length()===1){
                span.style.color='red';
                span.innerHTML=value.length+' characters, too long';
                if(valid_component()){
                    span.innerHTML+='.';
                    return false;
                }
                span.innerHTML+=', and the username you assigned includes illegal characters.';
                return false;
            }
            if(valid_length()===-1){
                span.style.color='red';
                span.innerHTML=value.length+' characters, too short';
                if(valid_component()){
                    span.innerHTML+='.';
                    return false;
                }
                span.innerHTML+=', and the username you assigned includes illegal characters.';
                return false;
            }
            if(!valid_component()){
                span.style.color='red';
                span.innerHTML='The username you assigned includes illegal characters.';
                return false;
            }
            span.style.color='green';
            span.innerHTML=value.length+' characters, valid.';

            function valid_length(){
                if(value.match(/^.{0,4}$/)){
                    return -1;
                }
                if(value.match(/^.{17,}$/)){
                    return 1;
                }
                return 0;
            }
            function valid_component(){
                if(value.match(/[^a-z\d]+/)){
                    return false;
                }
                return true;
            }
        })
    }
    function password_valid(){
        input_password_register.addEventListener('input',function(){
            var value=input_password_register.value;
            var span=document.getElementById('span_password_validity_register');
            if(value.match(/^.{4,}$/)){
                span.style.color='green';
                span.innerHTML=value.length+' characters, valid.';
                return true;
            }
            else{
                span.style.color='red';
                span.innerHTML=value.length+' characters, invalid.';
                return false;
            }
        })
    }
    function confirmpassword_valid(){
        input_confirmpassword_register.addEventListener('input',function(){
            var span=document.getElementById('span_confirmpassword_validity_register');
            if(input_confirmpassword_register.value===input_password_register.value){
                span.style.color='green';
                span.innerHTML='Password confirmed.'
            }
            else{
                span.style.color='red';
                span.innerHTML='Password unconfirmed.'
            }
        });
        input_password_register.addEventListener('input',function(){
            var span=document.getElementById('span_confirmpassword_validity_register');
            if(input_confirmpassword_register.value===input_password_register.value){
                span.style.color='green';
                span.innerHTML='Password confirmed.'
            }
            else{
                span.style.color='red';
                span.innerHTML='Password unconfirmed.'
            }
        })

    }
});
