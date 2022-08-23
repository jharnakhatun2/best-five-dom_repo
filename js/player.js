// Budget Calculations
//============================

document.getElementById('calculate').addEventListener('click', function () {
    const perPlayerInputField = inputFieldValueGetById('per-player');

    // player Expenses
    const totalPlayerExpenses = perPlayerInputField * 5;
    // Total player expenses validation
    if (isNaN(totalPlayerExpenses)) {
        return;
    }
    setTextElementValueById('player-expenses', totalPlayerExpenses);
});

//Calculate Total Expenses
document.getElementById('calculate-total').addEventListener('click', function () {
    const playerTotalExpenses = elementTextGetById('player-expenses');
    const managerExpenses = inputFieldValueGetById('manager-expenses');
    const coachExpenses = inputFieldValueGetById('coach-expenses');
    const calculateTotalExpenses = playerTotalExpenses + managerExpenses + coachExpenses;
    // Total Expenses validation
    if (isNaN(calculateTotalExpenses)) {
        return;
    }
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

}

function playerSelection(element) {
    const playerName = element.parentNode.children[0].innerText;

    const playersNameObj = {
        playerName: playerName,
    }
    playerArray.push(playersNameObj);

    // 5 players adding validation
    if (playerArray.length > 5) {
        alert('Already 5 players added. No more than 5 players!');
        return;
    }

    // button disable validation
    element.disabled = true;
    // disabled button bg-color validation
    element.style.backgroundColor = '#86efac';

    document.getElementById('total-added-players').innerText = playerArray.length;
    playerDisplay(playerArray);
}

