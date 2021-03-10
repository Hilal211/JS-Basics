document.getElementById("validate").addEventListener("click",display);
function display(){
var x=document.getElementById("shoe_size").value;
var y=document.getElementById("year").value;
    var r;
   r=((x*2)+5)*50-y+1766;
   alert(r);
}



    