

let namenode =document.getElementById("name");
let errornode1=document.getElementById("error1");

let emailnode=document.getElementById("mail");
let errornode2=document.getElementById("error2");

let contactnode=document.getElementById("contact");
let errornode3=document.getElementById("error3");

let feedbacknode=document.getElementById("feedback");
let errornode4=document.getElementById("error4");

function function1(){
    errornode1.innerHTML="";
    let name=namenode.value;
    if(namenode.value==""){
        errornode1.innerHTML="Name field is required";
        errornode1.style.color="red";
        namenode.style.border="2px solid red";
        return false;
    }
    else if(name.length<2){
        errornode1.innerHTML="Name length should be atleast 2 Character";errornode1.style.color="red";
        namenode.style.border="2px solid red";
        return false;
    }
    else{
        namenode.style.border="2px solid gray";
        return true;
    }
}

function function2(){
    errornode2.innerHTML="";
    let email=emailnode.value;
    let ss=email.substring(email.indexOf("@")+1);
    if(email==""){
        errornode2.innerHTML="Email field is required";errornode2.style.color="red";
        emailnode.style.border="2px solid red";
        return false;
    }
    else if(!email.includes("@") || ss=="" ){
        errornode2.innerHTML="Please put valid email id";errornode2.style.color="red";
        emailnode.style.border="2px solid red";
        return false;
    }
    else{
        emailnode.style.border="2px solid gray";
        return true;
    }
}

function function3(){
    errornode3.innerHTML="";
    let contact=contactnode.value;
    if(contactnode.value==""){
        errornode3.innerHTML="Contact Number is required";errornode3.style.color="red";
        contactnode.style.border="2px solid red";
        return false;
    }
    else if(isNaN(contact)){
        errornode3.innerHTML="Enter Valid Contact Number of 10 Digits";errornode3.style.color="red";
        contactnode.style.border="2px solid red";
        return false;
    }
    else if(contact.length!=10){
        errornode3.innerHTML="Enter Valid Contact Number of 10 Digits";errornode3.style.color="red";
        contactnode.style.border="2px solid red";
        return false;
    }
    else{
        contactnode.style.border="2px solid gray";
        return true;
    }
}

function function4(){
    errornode4.innerHTML="";
    let feedback=feedbacknode.value;
    if(feedbacknode.value==""){
        errornode4.innerHTML="Feedback/Complaint field is required";errornode4.style.color="red";
        feedbacknode.style.border="2px solid red";
        return false;
    }
    else if(feedback.length<20){
        errornode4.innerHTML="Please enter atleast 20 character";errornode4.style.color="red";
        feedbacknode.style.border="2px solid red";
        return false;
    }
    else{
        feedbacknode.style.border="2px solid gray";
        return true;
    }
}

function submit(){
    alert("Thankyou for your response");
    return true;
}

function validation(){
    let state1=function1();
    let state2=function2();
    let state3=function3();
    let state4=function4();
    let state5=submit();
    return (state1 && state2 && state3 && state4 && state5);
    
}



function changetime() {
    var d = new Date();
    da="25";
    s = d.getSeconds();
    m = d.getMinutes();
    h = d.getHours() % 12;

    if (d.getHours() > 12) {
        time = "PM"
    } else {
        time = "AM";
    }
    document.getElementById('date').innerHTML = da+" days   "+h + " hours   " + m + " mins   " + s + " secs   ";
    document.getElementById('date1').innerHTML = da+" days   "+h + " hours   " + m + " mins   " + s + " secs   ";

    }

var interval = setInterval(changetime, 1000);






