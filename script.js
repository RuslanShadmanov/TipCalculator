const totalAmount = document.querySelector("#totalAmount");
const selectEl = document.querySelector("#tipPersentage");
const numOfPeople = document.querySelector ("#numOfPeople");
const calculation = document.querySelector ("#calculateBtn");
const tipResult = document.querySelector ("#tipResult");

function calculateTip(){
    const totalAmountVal= Number(totalAmount.value);
    const selectOptionVal = Number(selectEl.options[selectEl.selectedIndex].value)
    const totalTip = totalAmountVal * selectOptionVal/100;
    const numOfPeopleVal = Number(numOfPeople.value);
    const eachTip = totalTip / numOfPeopleVal;
    tipResult.innerText = `$ ${eachTip}`;
   

}

calculation.addEventListener("click",calculateTip);
