const inputBill = document.querySelector('#bill')
const inputPeople = document.querySelector('#people')
const tipButtons = document.querySelectorAll('.tip-btn')
const tipCustomInput = document.querySelector('#tip-custom')
const zeroErrorMsg = document.querySelector('.not-zero')
const resetBtn = document.querySelector('.reset-btn')
const tipPerPerson = document.querySelector('#tip-per-person')
const totalPerPerson = document.querySelector('#total-per-person')
let selectedTip = null

tipButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        tipButtons.forEach(btn => btn.classList.remove('active'))
        button.classList.add('active')
        selectedTip = button.dataset.tip
        
        calculate()
    })
})

tipCustomInput.addEventListener('input', function() {
    selectedTip = tipCustomInput.value
    
    calculate()
})

inputBill.addEventListener('input', calculate)
inputPeople.addEventListener('input', calculate)

function calculate() {
    let bill = parseFloat(inputBill.value)
    let people = parseInt(inputPeople.value)

    if (people === 0 || isNaN(people)) {
        zeroErrorMsg.style.display = 'block'
        return
    }
    zeroErrorMsg.style.display = 'none'

    let tipAmount = (bill * selectedTip / 100) / people
    let totalAmount = (bill / people) + tipAmount

    tipPerPerson.textContent = tipAmount.toFixed(2)
    totalPerPerson.textContent = totalAmount.toFixed(2)
}

resetBtn.addEventListener('click', function() {
    selectedTip = null
    tipButtons.forEach(btn => btn.classList.remove('active'))
    tipPerPerson.textContent = '0.00'
    totalPerPerson.textContent = '0.00'
    inputBill.value = ''
    inputPeople.value = ''
    tipCustomInput.value = ''
})