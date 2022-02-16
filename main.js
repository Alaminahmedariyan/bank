document.getElementById('login-submit').addEventListener('click', function(){
    const emailField = document.getElementById('email');
    userEmail = emailField.value;
    
    const passwordField = document.getElementById('password');
    const userPassword = passwordField.value;
    if(userEmail == 'alaminahmedariyan2022@gmail.com' && userPassword == 'secrect'){
        window.location.href ='banking.html'
    } 
})


