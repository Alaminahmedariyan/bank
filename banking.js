document.getElementById('deposit-button').addEventListener('click', function(){
    // get the amount deposit 
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText); 

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    // update account balance 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText  = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal; 

    
    // clear the deposit input field    
       depositInput.value = '';
});

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawText);

   const withdrawTotal = document.getElementById('withdraw-total');
   const previousWithdrawText = withdrawTotal.innerText;
   const previousWithdrawAmount = parseFloat(previousWithdrawText);
   const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
   withdrawTotal.innerText = newWithdrawTotal;

//    update total balance 
const balanceTotal = document.getElementById('balance-total');
const previousBalanceText  = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(previousBalanceText);
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
balanceTotal.innerText = newBalanceTotal; 

//    clear the deposit input field 
withdrawInput.value = '';

})