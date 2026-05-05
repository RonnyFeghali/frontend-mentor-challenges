const ratings = document.querySelectorAll('.rating-btn')
const userRating = document.getElementById('user-rating')
const userSubmit = document.querySelector('.submit')
const ratingState = document.querySelector('.rating-state')
const thankYouState = document.querySelector('.thank-you-state')
const userSelection = document.querySelector('.user-selection')

ratings.forEach(function(rating) {
    rating.addEventListener('click', function() {
        ratings.forEach(function(rating) {
            rating.classList.remove('checked')
        })
        
        userRating.textContent = rating.textContent
        userSelection.textContent = `You selected ${rating.textContent} out of 5`
        userSelection.style.color = 'var(--color-orange-500)'
        rating.classList.toggle('checked')
    })
})

userSubmit.addEventListener('click', function() {
    ratingState.style.display = 'none'
    thankYouState.style.display = 'flex'
})