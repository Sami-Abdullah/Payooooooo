function getInputValue(id){
  const element= document.getElementById(id);
  const value = element.value 
  return Number(value);
}
function getBalance(){
  const balanceElement =document.getElementById("balance");
  const balance = balanceElement.innerText;
  return Number(balance);
} 

function newBalance(balance){
    const balanceElement =document.getElementById("balance");
  balanceElement.innerText=balance
}