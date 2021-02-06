// reg exp used for pttern matching, search and replace functions

function validate(){
    var fname = document.querySelector('#fname');
    var flabel = document.querySelector('#flabel');
   // regx= new RegExp("E00", "i");
     var regx = /[sdp]imple/;  // [], character set holds first value;
   //  var regx = /[a-x]imple/; [0-9]simple; [0-5]a[6-9]bb
   // var regx = /[^1abc]abc/;  ^ used for not starting from first 
   // var regx = /[7-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/ or /[7-9][0-9]{9}
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