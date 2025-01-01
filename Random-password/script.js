const passwordBox = document.querySelector('#password');
const generatePasswordButton = document.querySelector('#generate-password-button');
const copyButton = document.querySelector('#copy-button');

let passwordLength = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqurstuvwxyz";
const number = "1234567890";
const specialchar = "!@#$%^&*()~[]{}\|";
const allChars = upperCase + lowerCase + number + specialchar;

function generateRandomPassword()
{
    let password = '';
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += specialchar[Math.floor(Math.random()*specialchar.length)];

    while(passwordLength>password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }
    return password;
}

generatePasswordButton.addEventListener('click',function(event){
    event.preventDefault();
    const finalPassword = generateRandomPassword();
    passwordBox.value = finalPassword;
});

copyButton.addEventListener('click',function(){
    console.log(passwordBox.value);
    if(passwordBox.value){
        passwordBox.select();
        document.execCommand("copy");
        swal({
            title: "Data copy successfully !",
            timer: 1000
          });
    }else{
    swal({
        title: "First Generate Password !",
        timer: 1000
      });
    }
    
})
