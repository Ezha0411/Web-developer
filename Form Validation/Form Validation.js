document.querySelector("form").addEventListener("submit",(fun)=>{
    if(!form()){
        fun.preventDefault()
    }
})
function form(fun){
    let input = document.getElementsByClassName("input-box")
    let error =document.getElementsByClassName("error")
    let uname= document.getElementById("uname").value 
    if(uname==""){
        error[0].textContent="Enter Your Name"
        input[0].style.border="2px solid red"
    }
    else{
        input[0].style.border="2px solid green"
        error[0].textContent=""
    }

    let mail= document.getElementById("email").value 
    if(mail==""){
        error[1].textContent="Enter Your Mail-id"
        input[1].style.border="2px solid red"
    }
    else if(!checkmail(mail)){
        error[1].textContent="Enter a valid  Mail-id"
        input[1].style.border="2px solid red"
    }
    else{
        input[1].style.border="2px solid green"
        error[1].textContent=""
    }

    let pnum = document.getElementById("pnum").value
    if(pnum==""){
        error[2].textContent="Enter Your Mobile Number"
        input[2].style.border="2px solid red"
    }
    else if(!mobilenumber(pnum)){
        error[2].textContent="Enter Your Correct Mobile Number"
        input[2].style.border="2px solid red"
    }
    else{
        input[2].style.border="2px solid green"
        error[2].textContent=""
    }
    let password = document.getElementById("password").value
    if(password ==""){
        error[3].textContent="Enter Your Password"
        input[3].style.border="2px solid red"
    }
    else if(password.length <8){
        error[3].textContent="You Must Enter 8 Characters"
        input[3].style.border="2px solid red"
    }
    else {
        input[3].style.border="2px solid green"
        error[3].textContent=""
    }
    let cpassword =document.getElementById("cpassword").value
    if(cpassword ==""){
        error[4].textContent="Enter Your Password"
        input[4].style.border="2px solid red"
    }
    else if(cpassword.length <= 8){
        error[4].textContent="You Must Enter 8 Characters"
        input[4].style.border="2px solid red"
    }
    else if(password != cpassword){
        error[4].textContent="Your Password is Not Matching"
        input[4].style.border="2px solid red"
    }
    else{
        input[4].style.border="2px solid green"
        error[4].textContent=""       
    }
    // document.querySelector("form").reset()
}
document.getElementById("eye-open").addEventListener("click",()=>{
    let eyeslash =document.getElementById("eye-slash")
    eyeslash.style.display="block"
    let password =document.getElementById("password")
    password.type="text"
    let eyeopen =document.getElementById("eye-open")
    eyeopen.style.display="none"
})
document.getElementById("eye-slash").addEventListener("click",()=>{
    let password =document.getElementById("password")
    password.type="password"
    let eyeslash =document.getElementById("eye-slash")
    eyeslash.style.display="none"
    let eyeopen =document.getElementById("eye-open")
    eyeopen.style.display="block"
})
let email=document.getElementById("email")
function checkmail(email) {
    return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

function mobilenumber(number) {
    var regex = /^[789]\d{9}$/;
    return regex.test(number);
}