const form = document.getElementById("registration-form");
const message = document.getElementById("message");


form.addEventListener('submit', (e) => {
    e.preventDefault();

const fname = document.getElementById("fname").value;
const lname = document.getElementById("lname").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const confirmpassword = document.getElementById("confirm-password").value;
const checkbox = document.getElementById("mycheckbox");

if (fname === "" || lname === "") {
console.log(`please fill all fields`); 
message.textContent = "first name and last name cannot be empty!"   
}
else if (email === ""){
    message.textContent = "email cannot be empty!"
 }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    console.log("invalid email");
   message.textContent = "invalid email" 
 }else if (password === ""){
    console.log("password cannot be empty!");
    message.textContent = "password cannot be empty!"
}else if (!/[!@#$%^&*()_+\-=[\]{}':"\\,.<>\/?]+/.test(password)){
    console.log("password must contain at least one special character")
    message.textContent = "password must contain at least one special character!"
}  else if (password.length < 8){
    console.log("password must be at least 8 char long")
    message.textContent = "password must be at least 8 char long" 
} else if (password !== confirmpassword){
    console.log ("password does not match")
    message.textContent = "password does not match"
}if (mycheckbox.checked){
    console.log("registration sucessful")
    alert("registration sucessful")

}else{ console.log("please check this to continue")
message.textContent = "please tick the checkbox to continue"
}

}) 
