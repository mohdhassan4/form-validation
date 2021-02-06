function validate(){
    var fname = document.querySelector('#fname');
    var lname = document.querySelector('#lname');
    var password = document.querySelector('#password');
    var flabel = document.querySelector('#flabel');
    if(fname.value == ""){
       // alert("first name not entered");
        fname.style.border = "2px solid red";
        flabel.style.visibility="visible";
        return false;
    }
    else if(lname.value == ""){
        alert("last name not entered");
        return false;
    }
    else if(password.value == ""){
        alert("password not entered");
        return false;
    }
    else if(password.value.length<5){
        alert("password is short");
        return false;
    }
}