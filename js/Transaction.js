const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('#toggle-btn');


toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('close');
  const isSidebarOpen = document.querySelector('.sidebar').classList.contains('close');
  if (isSidebarOpen) {
    toggleBtn.classList.remove('bx-menu-alt-right');
    toggleBtn.classList.add('bx-menu');
} else {
    toggleBtn.classList.remove('bx-menu');
    toggleBtn.classList.add('bx-menu-alt-right');
}

});
let transactions = [];

function addTransaction() {
  const name = document.getElementById("transactionName").value;
  const description = document.getElementById("transactionDescription").value;
  const amount = parseFloat(document.getElementById("transactionAmount").value) || 0;
  const date = document.getElementById("transactionDate").value;

  if (!name || !description || !date) {
    alert("Please fill out all fields!");
    return;
  }

  const transaction = { name, description, amount, date };
  transactions.push(transaction);
  updateTransactionTable();
  updateOverview();
  clearForm();
}

function updateTransactionTable() {
  const tbody = document.getElementById("transactionTableBody");
  tbody.innerHTML = "";

  transactions.forEach((transaction) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${transaction.name}</td>
      <td>${transaction.description}</td>
      <td>${transaction.amount.toFixed(2)}</td>
      <td>${transaction.date}</td>
    `;
    tbody.appendChild(row);
  });
}

function updateOverview() {
  const totalIncome = transactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  const currentBalance = totalIncome - totalExpenses;

  document.getElementById("income-card").querySelector("p").textContent = `$${totalIncome.toFixed(2)}`;
  document.getElementById("expenses-card").querySelector("p").textContent = `$${totalExpenses.toFixed(2)}`;
  document.getElementById("balance-card").querySelector("p").textContent = `$${currentBalance.toFixed(2)}`;
}

function clearForm() {
  document.getElementById("transactionName").value = "";
  document.getElementById("transactionDescription").value = "";
  document.getElementById("transactionAmount").value = "";
  document.getElementById("transactionDate").value = "";
}
