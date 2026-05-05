const header = document.querySelectorAll('.accordion-header')

header.forEach(function(header) {
    header.addEventListener('click', function() {
        header.parentElement.classList.toggle('open')
    })
})