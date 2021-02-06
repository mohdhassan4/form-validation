function validate(){
    var fname = document.querySelector('#fname');
    var flabel = document.querySelector('#flabel');
 /* \d  - match any digit(0-9)
   \w- match any word (a-z)
   \s- match whitespace character
   \t - match tab only
*/
    // var regx = /[7-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/ or /[7-9][0-9]{9}
    var regx= /^[7-9]\d{9}$/;
    if(regx.test(fname.value)){
        return true;
    }
    else{
        fname.style.border="3px solid red";
        flabel.style.visibility = "visible";
        return false;
    }
}