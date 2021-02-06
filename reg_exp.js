// reg exp used for pttern matching, search and replace functions

function validate(){
    var fname = document.querySelector('#fname');
    var flabel = document.querySelector('#flabel');
    regx= new RegExp("E00", "i");
    // var regx = /E00/;
    if(regx.test(fname.value)){
        return true;
    }
    else{
        alert("invalud");
        fname.style.border="3px solid red";
        flabel.style.visibility = "visible"
        return false;
    }
}