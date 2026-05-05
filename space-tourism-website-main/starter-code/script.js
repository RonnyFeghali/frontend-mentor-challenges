fetch('./data.json')
    .then(response => response.json())
    .then(data => {

        // Destination Page
        if (document.querySelector('#destination-name')) {
            function showDestination(destination) {
                document.querySelector('#destination-name').textContent = destination.name
                document.querySelector('#destination-description').textContent = destination.description
                document.querySelector('#destination-distance').textContent = destination.distance
                document.querySelector('#destination-travel-time').textContent = destination.travel
                document.querySelector('.destination-image img').src = destination.images.png
            }

            showDestination(data.destinations[0])
            const tabs = document.querySelectorAll('.nav-destination a')
            tabs[0].classList.add('active')

            tabs.forEach(function(tab, index) {
                tab.addEventListener('click', function(event) {
                    event.preventDefault()
                    tabs.forEach(tab => tab.classList.remove('active'))
                    tab.classList.add('active')
                    showDestination(data.destinations[index])
                })
            })
        }

        // Crew Page
        if (document.querySelector('#crew-name')) {
            function showCrew(crew) {
                document.querySelector('#crew-role').textContent = crew.role
                document.querySelector('#crew-name').textContent = crew.name
                document.querySelector('#crew-bio').textContent = crew.bio
                document.querySelector('.crew-image img').src = crew.images.png
            }
            showCrew(data.crew[0])

            const dots = document.querySelectorAll('#crew-dots button')
            dots[0].classList.add('active')

            dots.forEach(function(dot, index) {
                dot.addEventListener('click', function(event) {
                    event.preventDefault()
                    dots.forEach(dot => dot.classList.remove('active'))
                    dot.classList.add('active')
                    showCrew(data.crew[index])
                })
            })
        }

        // Technology Page
        if (document.querySelector('#tech-name')) {
            function showTechnology(tech) {
                document.querySelector('#tech-name').textContent = tech.name
                document.querySelector('#tech-description').textContent = tech.description
                document.querySelector('#tech-img').src = tech.images.portrait
            }

            showTechnology(data.technology[0])
            const buttons = document.querySelectorAll('.space-launch-numbers button')
            buttons[0].classList.add('active')

            buttons.forEach(function(button, index) {
                button.addEventListener('click', function() {
                    buttons.forEach(btn => btn.classList.remove('active'))
                    button.classList.add('active')
                    showTechnology(data.technology[index])
                })
            })
        }

    })