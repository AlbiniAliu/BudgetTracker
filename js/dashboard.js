const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('#toggle-btn');

// Add a click event listener to the toggle button
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('close');
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

// Create the pie chart
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

  if (taskText === "") {
      alert("Ju lutem shkruani një task!");
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