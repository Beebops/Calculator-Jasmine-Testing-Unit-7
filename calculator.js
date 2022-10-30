window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('calc-form')
  if (form) {
    setupIntialValues()
    form.addEventListener('submit', function (e) {
      e.preventDefault()
      update()
    })
  }
})

function getCurrentUIValues() {
  return {
    amount: +document.getElementById('loan-amount').value,
    years: +document.getElementById('loan-years').value,
    rate: +document.getElementById('loan-rate').value,
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = { amount: 265000, years: 15, rate: 4.32 }
  const loanAmountInput = document.querySelector('#loan-amount')
  loanAmountInput.value = values.amount
  const termYearsInput = document.querySelector('#loan-years')
  termYearsInput.value = values.years
  const yearlyRateInput = document.querySelector('#loan-rate')
  yearlyRateInput.value = values.rate
  update()
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues()
  //pass this obj to calculateMonthlyPayment
  updateMonthly(calculateMonthlyPayment(currentUIValues))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = values.rate / 100 / 12 //  0.0036 per month
  const n = values.years * 12 // 180 payments
  // values  = { amount: 265000, years: 15, rate: 4.32 }
  //   // 1. divide 0.0432 by 12 to get monthly rate
  //   //  0.0036
  //   // 2. add 1 to 0.0036 to get 1.0036
  //   // 3. multiply 15yrs by 12 to get 180 payments
  //   // 4. raise 1.0036 to the negative 180 power to get 0.5237
  //   // 5. subtract 0.5237 from 1 to get 0.4763
  //   // 6. divide 0.0036 by 0.4763 to get 0.00755826
  //   // 7. multiply 0.00755826 by 265000 to get monthly payment of 2,002.
  // values.amount * monthlyRate
  // --------------------------------
  // 1 - (Math.pow(1 + monthlyRate, -n))
  const monthlyPayment =
    (values.amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n))
  console.log(monthlyPayment)
  return monthlyPayment.toFixed(2) // monthly payment string is 2002.94
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPaymentUi = document.querySelector('#monthly-payment')
  monthlyPaymentUi.innerHTML = `$${monthly}`
  console.log(`$${monthly}`)
}
