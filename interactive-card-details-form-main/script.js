// Inputs to read from
const cardHolder = document.getElementById('name')
const cardNumber = document.getElementById('card-nr')
const expirationMonth = document.getElementById('exp-month')
const expirationYear = document.getElementById('exp-year')
const cvc = document.getElementById('cvc')

const displayCardNumber = document.getElementById('card-number')
const displayName = document.getElementById('card-name')
const displayExpDate = document.getElementById('card-exp-date')
const displayCvc = document.getElementById('card-back-placeholder')

const form = document.querySelector('form')

const errorName = document.getElementById('error-name')
const errorCardNr = document.getElementById('error-card-nr')
const errorExp = document.getElementById('error-exp')
const errorCvc = document.getElementById('error-cvc')

const continueButton = document.getElementById('continue-btn')

displayName.textContent = 'Jane Appleseed'
displayCardNumber.textContent = '0000 0000 0000 0000'
displayExpDate.textContent = '00/00'
displayCvc.textContent = '000'


cardHolder.addEventListener('input', function(e) {
    displayName.textContent = e.target.value
})

cardNumber.addEventListener('input', function(e) {
    let digits = e.target.value.replace(/\D/g, '').slice(0, 16)
    let formatted = digits.match(/.{1,4}/g)?.join(' ') || ''
    displayCardNumber.textContent = formatted
})

expirationMonth.addEventListener('input', function(e) {
    displayExpDate.textContent = expirationMonth.value + '/' + expirationYear.value
})

expirationYear.addEventListener('input', function(e) {
    displayExpDate.textContent = expirationMonth.value + '/' + expirationYear.value
})

cvc.addEventListener('input', function(e) {
    displayCvc.textContent = e.target.value
})

form.addEventListener('submit', function(e) {
    e.preventDefault()

    let isValid = true

    errorName.textContent = ''
    cardHolder.classList.remove('input-error')

    errorCardNr.textContent = ''
    cardNumber.classList.remove('input-error')

    errorExp.textContent = ''
    expirationMonth.classList.remove('input-error')
    expirationYear.classList.remove('input-error')

    errorCvc.textContent = ''
    cvc.classList.remove('input-error')

    if (!cardHolder.value) {
        cardHolder.classList.add('input-error')
        errorName.textContent = "Can't be empty"
        isValid = false
    } 
    
    if (!cardNumber.value) {
        cardNumber.classList.add('input-error')
        errorCardNr.textContent = "Can't be blank"
        isValid = false
    }

    if (cardNumber.value && cardNumber.value.replace(/\D/g, '').length !== 16) {
        cardNumber.classList.add('input-error')
        errorCardNr.textContent = 'Wrong format, numbers only'
        isValid = false
    }

    if (!expirationMonth.value || !expirationYear.value) {
        expirationMonth.classList.add('input-error')
        expirationYear.classList.add('input-error')
        errorExp.textContent = "Can't be empty"
        isValid = false
    }

    if (!cvc.value) {
        cvc.classList.add('input-error')
        errorCvc.textContent = ("Can't be empty")
        isValid = false
    }

    if (isValid) {
        form.style.display = 'none'
        document.getElementById('completed-state').style.display = 'flex'
    }
})

continueButton.addEventListener('click', function(e) {
    form.style.display = 'flex'
    document.forms[0].reset()
    document.getElementById('completed-state').style.display = 'none'
    
    displayName.textContent = 'Jane Appleseed'
    displayCardNumber.textContent = '0000 0000 0000 0000'
    displayExpDate.textContent = '00/00'
    displayCvc.textContent = '000'
})