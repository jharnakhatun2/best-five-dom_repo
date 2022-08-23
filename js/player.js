// Budget Calculations
//============================

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
//=========================

const playerArray = [];

function playerDisplay(allPlayers) {
    const playersBoard = document.getElementById('players-board');
    playersBoard.innerHTML = '';
    for (let i = 0; i < allPlayers.length; i++) {
        const name = playerArray[i].playerName;
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${i + 1}</td>
        <td>${name}</td>
        `;
        playersBoard.appendChild(tr);
    }
    // console.log(allPlayers);
}

function playerSelection(element) {
    const playerName = element.parentNode.children[0].innerText;
    const playersNameObj = {
        playerName: playerName,
    }
    playerArray.push(playersNameObj);
    document.getElementById('total-added-players').innerText = playerArray.length;
    playerDisplay(playerArray);
}
