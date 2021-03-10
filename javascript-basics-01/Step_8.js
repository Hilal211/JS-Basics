document.getElementById("validate").addEventListener("click",display);
function display(){
var a=document.getElementById("age").value;
a=parseInt(a);
if(a>=18){
    alert("you are over 18");
    }
    else if(a<18){
        alert("you are under 18");
    }
    else{
        alert("error");
    }  
}

