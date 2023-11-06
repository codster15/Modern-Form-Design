 
 

 

var namevalidate = (event)=>{

   var name = document.querySelector(".username").value;

   if(name.trim() !== ""){

         var upperCaseCheck = /[A-Z]/.test(name);
         var lowerCaseCheck = /[a-z]/.test(name);
         var under_score = /[_]/.test(name);
         var number = /[0-9]/.test(name);
            
      
         if( /^[A-Z]/.test(name) ){
            document.querySelector(".spanname").innerHTML = "";
         }else{
            document.querySelector(".spanname").innerHTML = " * Username  must starts with uppercase";
            return false;
         }


      
      if(name.trim().length >= 5 && name.trim().length <= 12){
         document.querySelector(".spanname").innerHTML = "";
      }else{
         document.querySelector(".spanname").innerHTML = ' * Username should be between 5 to 12 charaters ';
         return false;
      }



      if( upperCaseCheck && lowerCaseCheck ){

         document.querySelector(".spanname").innerHTML = "";
      } else{
         document.querySelector(".spanname").innerHTML = ' * Username should must have one upperCase and lowerCase';
         return false;
      }
   
      if( under_score ){
         document.querySelector(".spanname").innerHTML = "";
      }else{
         document.querySelector(".spanname").innerHTML = " * Username  must have a one  _ underscore";
      return false;
      }

        if(number ){
         document.querySelector(".spanname").innerHTML = "";
        }else{

         document.querySelector(".spanname").innerHTML = " * Username  atlest have one number";
         return false;

        }
      

         
      
   }else{
      document.querySelector(".spanname").innerHTML = " * Username  cannot be empty";
      return false;
   }

   passwordvalidation();                           //password function calling


   return true

}




// Basic password requirements for validation typically include:

// Minimum Length: Passwords should have a minimum length, often ranging from 8 to 12 characters.

// Uppercase Letters: At least one uppercase letter should be included in the password.

// Lowercase Letters: At least one lowercase letter should be included in the password.

// Numbers (Digits): At least one numeric digit should be included in the password.

var passwordvalidation = ()=>{

   var password = document.querySelector(".userPassword").value;


   if(password.trim() !== ''){

     var upperCasePassword = /[A-Z]/.test(password);
     var lowerCasePassword = /[a-z]/.test(password);
     var digit             = /[0-9]/.test(password); 
     var specialchar       = /[@,_,!,#,$,%]/.test(password);
     var sign           = /[., ]/.test(password);
    
     

     if(upperCasePassword ){     //uppercase condition
      document.querySelector(".spanpassword").innerHTML = '';
     }else{
      document.querySelector(".spanpassword").innerHTML = " * Password must have one Uppercase ";
      return false;
     }
    
     if( lowerCasePassword ){     //lowercase condition
      document.querySelector(".spanpassword").innerHTML = '';
     }else{
      document.querySelector(".spanpassword").innerHTML = " * Password must have one lowercase ";
      return false;
     }

      if(digit){                  // digit condition
         document.querySelector(".spanpassword").innerHTML = '';
      }else{
         document.querySelector(".spanpassword").innerHTML = " * Password must have one digit ";
         return false;
      }

      if( specialchar){           // secial char condition
                     
            document.querySelector(".spanpassword").innerHTML = '';
         }else{
            document.querySelector(".spanpassword").innerHTML = " * Password must have one special character. Ex - @,_,!,#,$,%";
            return false;
         }
    


         if(sign){                  // dot condition
           
            document.querySelector(".spanpassword").innerHTML = " * dont use dot(.) (space) in password   ";
            return false;
            
         }else{
            document.querySelector(".spanpassword").innerHTML = '';
         }
         

     if(password.length >= 8 && password.length <= 20 ){   // password length condition
      document.querySelector(".spanpassword").innerHTML = '';
    }else{
     document.querySelector(".spanpassword").innerHTML = " * Password rage is between 8 to 20 charracter only";
     return false;
    }
   

   

   }else{

      document.querySelector(".spanpassword").innerHTML = " * Password cannot be empty";
      return false;
   }
   
  

   
   
   return true;


}










var submitlogin = document.querySelector("#submitbutton");

submitlogin.addEventListener("click" , namevalidate)

 
