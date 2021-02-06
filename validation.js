function validate(){
    var fname = document.querySelector('#fname');
    var pass = document.querySelector('#password');
    var lname = document.querySelector('#lname');
   if(fname.value=="" || pass.value==""|| lname.value=="" || fname.value.length<5){
        alert("you missed something");
        return false;
   }
}