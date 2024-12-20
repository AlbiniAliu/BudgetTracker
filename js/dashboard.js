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
const chartData = {
  labels: ["Groceries", "Entertainment", "Bills"],
  datasets: [
    {
      
      data: [30, 20, 50],
      backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe"],
      hoverBackgroundColor: ["#ff6384", "#36a2eb", "#cc65fe"]
    }
  ]
};


const ctx = document.getElementById("myPieChart").getContext("2d");
const myPieChart = new Chart(ctx, {
  type: "pie",
  data: chartData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      tooltip: {
        enabled: true
      }
    }
  }
});


document.getElementById("dataForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const categoryName = document.getElementById("categoryName").value;
  const categoryValue = parseFloat(document.getElementById("categoryValue").value);
  if (!categoryName || isNaN(categoryValue)) {
    alert("Please enter valid data.");
    return;
  }

  
  chartData.labels.push(categoryName);
  chartData.datasets[0].data.push(categoryValue);

  
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  chartData.datasets[0].backgroundColor.push(randomColor);
  chartData.datasets[0].hoverBackgroundColor.push(randomColor);

  
  myPieChart.update();

  
  document.getElementById("categoryName").value = "";
  document.getElementById("categoryValue").value = "";
});
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  const amountInput = document.getElementById("amountInput");


  if (taskText === "") {
      alert("Input your !");
      return;
  }

  if (amountInput === "") {
    alert("Input your goal!");
    return;
}

  
  const taskHTML = `
      <div class="task">
          
          <span>${taskText}</span>
          <input class="checkbox" type="checkbox" onchange="toggleTask(this)">
      </div>
  `;

  
  const taskContainer = document.getElementById("taskContainer");
  taskContainer.innerHTML += taskHTML;

  
  taskInput.value = "";

}

function toggleTask(checkbox) {
  const taskDiv = checkbox.parentElement; 

  
  if (checkbox.checked) {
      taskDiv.classList.add("completed"); 
  } else {
      taskDiv.classList.remove("completed");   
  }
}
function addRow() {
  
  const tableBody = document.getElementById('tableBody');

  
  const budgetName = document.getElementById('budgetName').value;
  const category = document.getElementById('category').value;
  const totalBudget = parseFloat(document.getElementById('totalBudget').value) || 0;
  const amountSpent = parseFloat(document.getElementById('amountSpent').value) || 0;
  const remainingAmount = totalBudget - amountSpent;
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;
  const percentage = (parseFloat(amountSpent) / parseFloat(totalBudget)) * 100;
  
  const newRow = document.createElement('tr');

  
  newRow.innerHTML = `
    <td>${budgetName}</td>
    <td>${category}</td>
    <td>${totalBudget.toFixed(2)}</td>
    <td>${amountSpent.toFixed(2)}</td>
    <td>${remainingAmount.toFixed(2)}</td>
    <td>${startDate}</td>
    <td>${endDate}</td>
    
    <td>${percentage.toFixed(2)+'%'}</td>
  `;

  
  tableBody.appendChild(newRow);

  
  document.getElementById('budgetName').value = '';
  document.getElementById('category').value = 'Housing';
  document.getElementById('totalBudget').value = '';
  document.getElementById('amountSpent').value = '';
  document.getElementById('remainingAmount').value = '';
  document.getElementById('startDate').value = '';
  document.getElementById('endDate').value = '';
  document.getElementById('percent').value = '';

}
function addRowAndDetails() {
  const tableBody = document.getElementById("tableBody");
  const detailsContainer = document.getElementById("detailsContainer");

  const budgetName = document.getElementById("budgetName").value;
  const category = document.getElementById("category").value;
  const totalBudget = parseFloat(document.getElementById("totalBudget").value) || 0;
  const amountSpent = parseFloat(document.getElementById("amountSpent").value) || 0;
  const remainingAmount = totalBudget - amountSpent;
  const percentage = (amountSpent / totalBudget) * 100 || 0;

  const motivationalMessages = [
    "Keep going! You're doing great!",
    "Small steps lead to big achievements!",
    "You're closer to your goal every day!",
    "Amazing progress so far!",
  ];
  const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${budgetName}</td>
    <td>${category}</td>
    <td>${totalBudget.toFixed(2)}</td>
    <td>${amountSpent.toFixed(2)}</td>
    <td>${remainingAmount.toFixed(2)}</td>
    <td>${document.getElementById("startDate").value}</td>
    <td>${document.getElementById("endDate").value}</td>
  `;
  tableBody.appendChild(newRow);

  const details = document.createElement("div");
  details.classList.add("progress-details");
  details.innerHTML = `
    <h3>${budgetName}</h3>
    <div class="circular-progress" style="--percentage:${percentage}">
      ${percentage.toFixed(2)}%
    </div>
    <p>Total Budget: $${totalBudget.toFixed(2)}</p>
    <p>Amount Spent: $${amountSpent.toFixed(2)}</p>
    <p class="remaining">Remaining: $${remainingAmount.toFixed(2)}</p>
    <div class="update-section">
      <input type="number" placeholder="Add Amount" class="update-input">
      <button class="update-btn">Update</button>
    </div>
    <div class="motivational-message">${randomMessage}</div>
  `;
  detailsContainer.appendChild(details);

  const updateButton = details.querySelector(".update-btn");
  updateButton.addEventListener("click", () => {
    const inputField = details.querySelector(".update-input");
    const addAmount = parseFloat(inputField.value) || 0;
    const updatedSpent = amountSpent + addAmount;
    const updatedPercentage = (updatedSpent / totalBudget) * 100;
    const updatedRemaining = totalBudget - updatedSpent;

    details.querySelector(".circular-progress").style.setProperty("--percentage", updatedPercentage);
    details.querySelector(".circular-progress").textContent = `${updatedPercentage.toFixed(2)}%`;
    details.querySelector(".remaining").textContent = `Remaining: $${updatedRemaining.toFixed(2)}`;

    inputField.value = "";
  });
}
function addDeadline() {
  const billName = document.getElementById("billName").value;
  const dueDate = document.getElementById("dueDate").value;
  const amountDue = document.getElementById("amountDue").value;
  const priority = document.getElementById("priority").value;

  if (!billName || !dueDate || !amountDue) {
    alert("Please fill out all fields!");
    return;
  }

  const deadlineList = document.getElementById("deadlinesList");
  const deadlineItem = document.createElement("div");
  deadlineItem.classList.add("deadline-item");
  deadlineItem.style.borderColor = priority;
  deadlineItem.innerHTML = `
    <p><strong>Bill:</strong> ${billName}</p>
    <p><strong>Due Date:</strong> ${dueDate}</p>
    <p><strong>Amount Due:</strong> $${amountDue}</p>
  `;

  deadlineList.appendChild(deadlineItem);

  document.getElementById("billName").value = "";
  document.getElementById("dueDate").value = "";
  document.getElementById("amountDue").value = "";
  document.getElementById("priority").value = "green";
  updateDangerIndicator();
}

function updateDangerIndicator() {
  const deadlines = document.querySelectorAll(".deadline-item");
  const indicator = document.querySelector(".danger-indicator");
  let highestPriority = "green";

  deadlines.forEach((deadline) => {
    if (deadline.style.borderColor === "red") highestPriority = "red";
    else if (deadline.style.borderColor === "yellow" && highestPriority !== "red") {
      highestPriority = "yellow";
    }
  });

  indicator.style.background =
    highestPriority === "red"
      ? "red"
      : highestPriority === "yellow"
      ? "yellow"
      : "green";
}