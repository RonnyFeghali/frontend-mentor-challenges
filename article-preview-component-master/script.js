const shareButton = document.querySelector('.share-btn')
const sharePopup = document.querySelector('.share-popup')

shareButton.addEventListener('click', function() {
    sharePopup.classList.toggle('active')
})

document.addEventListener('click', function(e) {
    if (!shareButton.contains(e.target)) {
        sharePopup.classList.remove('active')
    }
})

