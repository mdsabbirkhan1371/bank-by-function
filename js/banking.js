// input value 

function getInputvalue(inputID) {
    const inputField = document.getElementById(inputID);
    const amountText = inputField.value;
    const amountValue = parseFloat(amountText);
    // clear text 
    inputField.value = '';
    return amountValue;
};


// update total 
function updateTotal(totalFiledId, amount) {
    const totalElement = document.getElementById(totalFiledId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = amount + previousTotal;
}

// balance update 

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalenceTotal = parseFloat(balanceTotalText);
    return previousBalenceTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    /* const balanceTotalText = balanceTotal.innerText;
    const previousBalenceTotal = parseFloat(balanceTotalText); */
    const previousBalenceTotal = getCurrentBalance();


    if (isAdd == true) {
        balanceTotal.innerText = previousBalenceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalenceTotal - amount;
    }
}

// deposit event 

document.getElementById('deposit-button').addEventListener('click', function () {

    const depositAmount = getInputvalue('deposit-input');
    if (depositAmount > 0) {
        updateTotal('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }

});


// handle widthdraw event 

document.getElementById('widthdraw-button').addEventListener('click', function () {

    const widthdrawAmount = getInputvalue('widthdraw-input');
    const currentBalance = getCurrentBalance()
    if (widthdrawAmount > 0 && widthdrawAmount < currentBalance) {
        updateTotal('widthdraw-total', widthdrawAmount)
        updateBalance(widthdrawAmount, false)
    }
})