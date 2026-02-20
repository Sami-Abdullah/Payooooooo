const logInBtn = document .getElementById("login-btn")

logInBtn.addEventListener("click",()=>{
  const phoneNumber = document.getElementById("phone-number").value;
  const PIN = document.getElementById("PIN").value;
  
  if(phoneNumber === "12345678901"&&PIN==="1234"){
    window.alert("success")
    window.location.assign("/home.html")
  }else{
    window.alert("failed")
    return;
  }
})