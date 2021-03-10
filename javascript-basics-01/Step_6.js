document.getElementById("validate").addEventListener("click",display);
function display(){
 var nb1=document.getElementById("first_number").value;
 var nb2=document.getElementById("second_number").value;
 alert(nb1+"/"+nb2+"="+parseFloat(nb1/nb2));
}