var count = 0
document.querySelector("form").addEventListener("submit",form)
function form(evn){
    evn.preventDefault()
    // console.log("haiii")
    let tbody = document.querySelector("tbody")
    let tr =document.createElement("tr")
    let input=document.getElementsByClassName("input-box")
    let error = document.getElementsByClassName("error")
    let cname=document.getElementById("cname").value
    let bikeno=document.getElementById("bikeno").value
    let intime=document.getElementById("in-time").value
    if(cname == ""){
        
        error[3].textContent="Please Enter all the data "
    }
    else{
        tbody.appendChild(tr)   
    }
    let td =document.createElement("td")
    td.innerText = ++count
    tr.appendChild(td)
    if(cname ==""){
        error[0].textContent="Please Enter the Customer Name"
        input[0].style.border="2px solid red"
    }
    else{
        let td =document.createElement("td")
        td.innerText = cname
        tr.appendChild(td)
        error[0].textContent=""
        input[0].style.border="2px solid green"
    }

    if(bikeno ==""){
        error[1].textContent="Please Enter the Bike Number"
        input[1].style.border="2px solid red"
    }
    else{
        let td =document.createElement("td")
        td.innerText = bikeno
        tr.appendChild(td)
        error[1].textContent=""
        input[1].style.border="2px solid green"
    }
    
    if(intime ==""){
        error[2].textContent="Please Enter the IN-time"
        input[2].style.border="2px solid red"
    }
    else{
        let td =document.createElement("td")
        td.innerText = intime
        tr.appendChild(td)
        error[2].textContent=""
        input[2].style.border="2px solid green"
    }
    let outtime =document.getElementById("out-time").value 
    if(outtime ==""){
        error[3].textContent="Please Enter the Out-time"
        input[3].style.border="2px solid red"
    }
    else{
        let td =document.createElement("td")
        td.innerText = outtime
        tr.appendChild(td)
        error[3].textContent=""
        input[3].style.border="2px solid green"
    }

    let td1=document.createElement("td")
    td1.innerHTML='<button onclick="update(this)"> Update</button>'
    tr.appendChild(td1)
    let td2=document.createElement("td")
    td2.innerHTML='<button onclick="Delete(this)">Delete</button>'
    tr.appendChild(td2)

    document.querySelector("form").reset()
}
function update(btn){
    btn.parentElement.parentElement.contentEditable="true"
}
function Delete(btn){
    btn.parentElement.parentElement.remove()
}