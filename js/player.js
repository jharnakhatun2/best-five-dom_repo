// Player Total Expenses

document.getElementById('calculate').addEventListener('click', function () {
    const perPlayerInputField = inputFieldValueGetById('per-player');

    // player Expenses
    const totalPlayerExpenses = perPlayerInputField * 5;
    setTextElementValueById('player-expenses', totalPlayerExpenses);
});

//Calculate Total Expenses
document.getElementById('calculate-total').addEventListener('click', function () {
    const playerTotalExpenses = elementTextGetById('player-expenses');
    const managerExpenses = inputFieldValueGetById('manager-expenses');
    const coachExpenses = inputFieldValueGetById('coach-expenses');
    const calculateTotalExpenses = playerTotalExpenses + managerExpenses + coachExpenses;
    setTextElementValueById('total-management', calculateTotalExpenses);
});

// Selected-V aside
const playerArray = [];
function playerSelection(element){
    const playerName = element.parentNode.parentNode.children[0].innerText;
    console.log(playerName);
    const players = playerName;
    playerArray.push(players);
    console.log(playerArray);

}