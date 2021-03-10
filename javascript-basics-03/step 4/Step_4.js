function change(){
    var pass=document.getElementById("password").value;
    var cp=document.getElementById("confirmation").value;
  
    if(cp!=pass){
        document.getElementById("confirmation").style.borderColor="red";
    }
    else{
        document.getElementById("confirmation").style.borderColor="none";
    }
}