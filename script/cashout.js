const withdrawBtn = document.getElementById("withdraw-btn");

withdrawBtn.addEventListener("click", function () {
  const agentNum = document.getElementById("agent-number").value;
  const amount = Number(document.getElementById("amount").value);
  const balance = Number(document.getElementById("balance").innerText);
  const PIN = document.getElementById("PIN").value;
  console.log(typeof(amount),amount,typeof(balance),balance)

  if (agentNum !== "12233344445"){
    return window.alert("wrong agent number")
  }
  if( amount <= 0){
    return window.alert("invalid balance");
  }
  if (amount > balance){
    return window.alert("low balance")
  }
  if (PIN !== "1234"){
    return window.alert("wrong PIN");
  }
  document.getElementById("balance").innerText=String( balance-amount);
  return window.alert("success");
})
