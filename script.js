let firstinputname=document.querySelector(".firstinputname")
let lastinputname=document.querySelector(".lastinputname")
let inputnum=document.querySelector(".inputnum")
let inputemail=document.querySelector(".inputemail")
let inputaddress=document.querySelector(".inputaddress")
let word=document.querySelector(".word")
let btn=document.querySelector(".btn")
let firstname=document.querySelector(".firstname")
let lastname=document.querySelector(".lastname")
let mblnumber=document.querySelector(".mblnumber")
let mailid=document.querySelector(".mailid")
// const onlyLetters = [A-Za-z]+$;






btn.addEventListener("click", function (event) {
  event.preventDefault(); 
//    const nameValue = firstinputname.value.trim();
  const onlyLetters = /^[A-Za-z]+$/; 
   if (firstinputname.value.length < 5|| !onlyLetters.test(firstinputname.value)) {
        firstname.textContent = "First name should be at least 5 letters and contain only letters";
        firstname.style.color = "red";
    }
   

     if(lastinputname.value.length <5){
        lastname.textContent="lastname should be at least 5 letters"
        lastname.style.color="red"
        
     }
       if(lastinputname.value.length>=5){
    }
    if(inputnum.value.length !== 10){
        if(inputnum.value.length<9||inputnum.value.length>9)
       { mblnumber.textContent="give me a valid mobile number"
        mblnumber.style.color="red"}
    }
   
   if (!inputemail.value.includes("@") || !inputemail.value.includes(".com")) {
        mailid.textContent = "Give me a valid email ID";
        mailid.style.color = "red";
    }
   if (inputemail.value.includes("@") && inputemail.value.includes(".com")) {
   }
    if(firstinputname.value.length>=5 && onlyLetters.test(firstinputname) && lastinputname.value.length>=5 && inputnum.value.length === 10 && inputemail.value.includes("@") && inputemail.value.includes(".com")){
        console.log("firstname:",firstinputname.value)
        console.log("lastname:",lastinputname.value)
        console.log("mobilenumber:",inputnum.value)
        console.log("emailid:",inputemail.value)
    }

});































// btn.addEventListener("click", function (e) {
//     e.preventDefault(); // prevent form from refreshing

//     // Check if the first name has at least 5 characters
//     if (inputname.value.length >= 5) {
//       word.textContent = "Thank you, " + inputname.value + "!";
//       word.style.color = "green";
//     } else {
//       word.textContent = "First name must be at least 5 characters.";
//       word.style.color = "red";
//     }
//   });