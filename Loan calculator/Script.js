function calculateLoan() {
    const amount = parseFloat(document.getElementById('amount').value);
    const interestRate = parseFloat(document.getElementById('interest').value) / 100 / 12;
    const years = parseFloat(document.getElementById('years').value);
    const months = years * 12;

    // Monthly payment calculation
    const monthlyPayment = (amount * interestRate) / (1 - Math.pow(1 + interestRate, -months));

    const scheduleHeading = document.getElementById('loan-schedule');
    scheduleHeading.innerHTML = `Loan Schedule for $${amount} over ${years} years`

    let balance = amount;
    const scheduleTable = document.getElementById('schedule');
    
    // Clear previous schedule
    scheduleTable.innerHTML = "<tr><th>Month</th><th>Interest Payment</th><th>Principal Payment</th><th>Balance</th></tr>";

    for (let month = 1; month <= months; month++) {
        const interestPayment = balance * interestRate;
        const principalPayment = monthlyPayment - interestPayment;
        balance -= principalPayment;

        // Add to the table
        const row = scheduleTable.insertRow();
        row.insertCell(0).innerText = month;
        row.insertCell(1).innerText = interestPayment.toFixed(2);
        row.insertCell(2).innerText = principalPayment.toFixed(2);
        row.insertCell(3).innerText = balance.toFixed(2);
    }
    if(balance < 0) balance = 0; // Ensuring balance doesn't go negative
}


function resetLoan() {
    const scheduleTable = document.getElementById('schedule');
    scheduleTable.innerHTML = "";

    const scheduleHeading = document.getElementById('loan-schedule');
    scheduleHeading.innerHTML = '';
}


const menu = document.querySelector('.menu');
    const btn = menu.querySelector('.nav-tgl');
    btn.addEventListener('click', evt => {
	    menu.classList.toggle('active');
    })