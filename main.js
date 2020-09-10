const form =document.getElementById('form')
const username =document.getElementById('username')
const email =document.getElementById('email')
const password =document.getElementById('password')
const password2 =document.getElementById('password2')


function showError(input,message){
    const formControl =input.parentElement
    formControl.className ='form-control error'
    const small=formControl.querySelector('small')
    small.innerText=message
}
function showSuccess(input){
    const formControl =input.parentElement
    formControl.className ='form-control success'


}
function validEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
}

function checkLength(input,min,max){
    if ((input.value.length <min) || (input.value.length>max)){
        const formControl =input.parentElement
        formControl.className ='form-control error'
        const small=formControl.querySelector('small')
        small.innerText= 'Must be between '+ min+ ' and ' +max+' characters'
    }
}
function checkForSpaces (input){
        const formControl =input.parentElement
        formControl.className ='form-control error'
        const small=formControl.querySelector('small')
        small.innerText= "Spaces are not allowed"
}
function nospaces(t){

    if(t.value.match(/\s/g)){
        const formControl =password.parentElement
        formControl.className ='form-control error'
        const small=formControl.querySelector('small')
        small.innerText= "Spaces are not allowed"
        t.value=t.value.replace(/\s/g,'')
    }
}
 
password.addEventListener('keyup',function(){
    nospaces(this)
})

form.addEventListener('submit',function(e){
    e.preventDefault()
    if (username.value ===''){
        showError(username,'Username is required')
    } else if ((username.value.trim().length < 3) || (username.value.trim().length > 12)){
         checkLength(username,3,12)}
     
    else {
         showSuccess(username)
    }
    
})

form.addEventListener('submit',function(e){
    e.preventDefault()
    if (email.value ===''){
        showError(email,'Email is required')
    }else if(!validEmail(email.value)){
        showError(email,'Email is not valid')

    } 
    else {
        showSuccess(email)
    }
})

form.addEventListener('submit',function(e){
    e.preventDefault()
    if (password.value ===''){
        showError(password,'password is required')
    }else if ((password.value.length < 8) || (password.value.length>16)){
         checkLength(password,8,16)
    } 
    else {
        
        showSuccess(password)
    }
    
})

form.addEventListener('submit',function(e){
    e.preventDefault()
    if (password2.value ===''){
        showError(password2,'password is required')
    } else if (!(password.value === password2.value)){
        showError(password2, 'Password is incorect')
    }else {
        showSuccess(password2)
    }
})

 