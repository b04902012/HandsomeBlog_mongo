username='albertliu'
window.addEventListener('load',function(){
    var menubar=document.getElementById('menubar')
    var about_menubar=document.createElement('div');
    var admin_menubar=document.createElement('div');
    var center_menubar=document.createElement('div');
    var account_menubar=document.createElement('div');
    var log_menubar=document.createElement('div');
    center_menubar.setAttribute('id','center_menubar');
    menubar.appendChild(about_menubar);
    menubar.appendChild(admin_menubar);
    menubar.appendChild(center_menubar);
    menubar.appendChild(account_menubar);
    menubar.appendChild(log_menubar);
    var logged=false;
    if(logged){
        account_menubar.innerHTML=username;
        log_menubar.innerHTML='LOGOUT';
    }
    else{
        var showAbout=false;
        var showAdmin=false;
        var showLogin=false;
        var showRegister=false;
        about_menubar.innerHTML='ABOUT';
        admin_menubar.innerHTML='ADMIN'
        account_menubar.innerHTML='REGISTER';
        log_menubar.innerHTML='LOGIN';
        aboutWindow();
        adminWindow();
        loginWindow();
        registerWindow();
        
    }
    function aboutWindow(){
        var div_about=document.createElement('div');
        div_about.setAttribute('id','div_about');
        div_about.setAttribute('class','floatWindow');
        div_about.style.display='none';
        div_about.innerHTML='\
            <table>\
                <tr>\
                    <td>\
                        About this site\
                <tr>\
                    <td>\
                        About the author\
            </table>';
        floatWindow.appendChild(div_about);
        about_menubar.addEventListener('mousedown',function(event){
            event.preventDefault();
        })
        about_menubar.addEventListener('click',function(event){
            event.preventDefault();
            if(showAbout){
                div_about.style.display='none';
                showAbout=false;
            }
            else{
                clearWindow();
                div_about.style.display='block';
                showAbout=true;
            }
        })
    }
    function adminWindow(){
        var div_admin=document.createElement('div');
        div_admin.setAttribute('id','div_admin');
        div_admin.setAttribute('class','floatWindow');
        div_admin.style.display='none';
        div_admin.innerHTML='\
            <table>\
                <tr>\
                    <td>\
                        <a href="./newpage.html">New Page<a>\
                <tr>\
                    <td>\
                        Recent Comments\
                <tr>\
                    <td>\
                        Users List\
            </table>';
        floatWindow.appendChild(div_admin);
        admin_menubar.addEventListener('mousedown',function(event){
            event.preventDefault();
        })
        admin_menubar.addEventListener('click',function(event){
            event.preventDefault();
            if(showAdmin){
                div_admin.style.display='none';
                showAdmin=false;
            }
            else{
                clearWindow();
                div_admin.style.display='block';
                showAdmin=true;
            }
        })
    }
    function loginWindow(){
        var div_login=document.createElement('div');
        div_login.setAttribute('id','div_login');
        div_login.setAttribute('class','floatWindow');
        div_login.style.display='none';
        div_login.innerHTML='\
            <table>\
                <tr>\
                    <td>\
                        Username:\
                    <td>\
                        <input id="username" type="text">\
                <tr><td><br><td><br>\
                <tr>\
                    <td>\
                        Password:\
                    <td>\
                        <input id="password" type="password">\
            </table>';
        floatWindow.appendChild(div_login);
        log_menubar.addEventListener('mousedown',function(event){
            event.preventDefault();
        })
        log_menubar.addEventListener('click',function(event){
            event.preventDefault();
            if(showLogin){
                div_login.style.display='none';
                showLogin=false;
            }
            else{
                clearWindow();
                div_login.style.display='block';
                showLogin=true;
            }
        })
    }
    function registerWindow(){
        var div_register=document.createElement('div');
        div_register.setAttribute('id','div_register');
        div_register.setAttribute('class','floatWindow');
        div_register.style.display='none';
        div_register.innerHTML='\
            <table>\
                <tr>\
                    <td>\
                        Username:<br>\
                        <input id="input_username_register" class="input_register" type="text">\
                    <td>\
                        Your username should be longer than 4 characters,\
                        not longer than 16 characters, and only include\
                        lowercase letters and numbers.<br>\
                        <span id="span_username_availability_register"></span>\
                        <span id="span_username_validity_register"><br></span>\
                <tr>\
                    <td>\
                        Password:<br>\
                        <input id="input_password_register" class="input_register" type="password">\
                    <td>\
                        Your password should be longer than 4 characters.<br>\
                        <span id="span_password_validity_register"><br></span>\
                <tr>\
                    <td>\
                        Confirm Password:<br>\
                        <input id="input_confirmpassword_register" class="input_register" type="password">\
                    <td>\
                        Please confirm your password by typing it down again.<br>\
                        <span id="span_confirmpassword_validity_register"><br></span>\
            </table>'
        floatWindow.appendChild(div_register);
        account_menubar.addEventListener('mousedown',function(event){
            event.preventDefault();
        });
        account_menubar.addEventListener('click',function(event){
            event.preventDefault();
            if(showRegister){
                div_register.style.display='none';
                showRegister=false;
            }
            else{
                clearWindow();
                div_register.style.display='block';
                showRegister=true;
            }
        });
    }
    function clearWindow(){
        document.getElementById('div_about').style.display='none';
        document.getElementById('div_admin').style.display='none';
        document.getElementById('div_register').style.display='none';
        document.getElementById('div_login').style.display='none';
        showAbout=false;
        showAdmin=false;
        showRegister=false;
        showLogin=false;
    }
});
