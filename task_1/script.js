function resultPrint(){

     let result;
     result=document.getElementById('result');  
     result.style.display="block";
     result.setAttribute('class','alert alert-danger');
     let usernameValue=document.frmBegin.user_name.value.trim();
     let passwordValue=document.frmBegin.pass.value.trim();
     let emailValue=document.frmBegin.mail.value.trim(); 
     let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     console.log(regex.test(emailValue));

      
     if(usernameValue.length==0 || passwordValue.length==0 || emailValue.length==0)
     {        
         result.innerHTML="Deyerlerin hamisi daxil edilmelidir!";
         return false;
     }
     else if(usernameValue.charAt(0)==usernameValue.charAt(0).toLowerCase()){
         result.innerHTML="Username-in ilk herfi boyuk yazilmalidir!";
         return false;
     }
     else if(passwordValue.length<6){
         result.innerHTML="Password minumum 6 simvoldan ibaret olmalidir!";
         return false;
     }
     else if(regex.test(emailValue)==false){
         result.innerHTML="mail adresi duzgun formatda daxil edilmeyib!";
         return false;
     }
     else{
         result.setAttribute('class','alert alert-success');
         result.innerHTML=usernameValue+" adli user elave edildi";
        return false; //true
     } 
}