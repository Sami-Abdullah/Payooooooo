const withdrawBtn = document.getElementById("withdraw-btn");

withdrawBtn.addEventListener("click", function () {
  const agentNum = getInputValue("agent-number");
  const amount = getInputValue("amount");
  const PIN = getInputValue("PIN");
  const balance = getBalance();


  if (agentNum !== 12233344445){
    return window.alert("wrong agent number")
  }
  if( amount <= 0){
    return window.alert("invalid balance");
  }
  if (amount > balance){
    return window.alert("low balance")
  }
  if (PIN !== 1234){
    return window.alert("wrong PIN");
  }

  newBalance(balance-amount)
  return window.alert("success");
})
