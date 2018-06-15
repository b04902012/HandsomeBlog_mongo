import userModule from '../userModule.js'
window.addEventListener('load',function(event){
    var username=document.getElementById('username')
    var password=document.getElementById('password')
    var register=document.getElementById('register')
    var status_login=document.getElementById('status_login')
    login.addEventListener('click',function(event){
        var login_request=new XMLHttpRequest()
        var data={
            username:username.value,
            password:password.value,
        }
        userModule.logIn(username,password)
        
    })
})
