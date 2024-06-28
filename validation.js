const form = document.getElementById("login");
const errormsg = document.getElementById("error-msg")



form.addEventListener("submit", (e) => {
   e.preventDefault();
   const email = document.getElementById("email").value;
   const password = document.getElementById("password").value;
   
   if (email === "") {
      console.log("email cannot be empty");
     errormsg.textContent = "email cannot be empty";
   }
   if (password === "") {
    console.log(" password cannot be empty");
    errormsg.textContent = "password cannot be empty";
   }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      console.log("invalid email address")
      errormsg.textContent = "invalid email address";
   }else if (!/[!@#$%^&*()_+\-=[\]{}':"\\,.<>\/?]+/.test(password)){
         console.log('password must contain at least one special character')
         errormsg.textContent = 'password must contain at least one special character';
       }else if (email.length < 3) {
         console.log("email must be at least 3 characters")
         errormsg.textContent = "email must be at least 3 characters";
       }else if (password.length < 8) {
         console.log("password must be at least 8 characters")
         errormsg.textContent = "password must be at least 8 characters";
       }
       else{
        errormsg.textContent = "";
        window.alert("Login Sucessful");
        
       }
});
   
