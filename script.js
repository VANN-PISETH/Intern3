// stickbar
var navbar = document.getElementById('navbar');

window.onscroll = function () {

if(window.pageYOffset > 740){

navbar.style.position = "fixed";
navbar.style.top = 0;

}else{
navbar.style.position = 'relative'; //fixed
navbar.style.top = 100;
}
}

// alert message
function validate(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
   
    if(name.value =="" || email.value =="")
    {
       alert("No blank values allowed");
       return false;
    }
    else
    {
       true;
    }
   
}

