// var incomeInput = document.getElementById('income');
// var expenseInput = document.getElementById('expense');
// var checkBtn = document.getElementById('check-btn');
// var message  = document.getElementById("message");
// checkBtn.addEventListener('click', check);

// function check() {
//   var income = parseFloat(incomeInput.value);
//   var expense = parseFloat(expenseInput.value);

//   if (isNaN(income) || isNaN(expense)) {
//     alert('Please enter valid numbers for income and expense');
//     return;
//   }

//   if (income < expense) {
//       alert('Expense cannot be greater than income');
//     } else {
    
//     alert('ap ka itna paisa bachay' + (income - expense));
// }
// const listItem = document.createElement('li');
//       listItem.textContent = `income: $${income}, Expense: $${expense}`;
//       list.appendChild(listItem);
// }  
function calculate() {
  var income = parseFloat(document.getElementById('income').value);
  var expense = parseFloat(document.getElementById('expense').value);
  
  var remainingSavings = income - expense;
  
  document.getElementById('display').innerHTML = `
       <h2>Income: $${income.toFixed(2)}</h2>
       <h2>Expense: $${expense.toFixed(2)}</h2>
       <h2>Remaining Savings: $${remainingSavings.toFixed(2)}</h2>
   `;
}

function resetFields() {
  // Clear all input fields
  document.getElementById('income').value = '';
  document.getElementById('expense').value = '';
  
  // Clear the display area
  document.getElementById('display').innerHTML='';
}

