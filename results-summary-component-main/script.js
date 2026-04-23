const scoreEl = document.querySelector('.score')
const percentageEl = document.querySelector('.percentage-score')
const reactionEl = document.querySelector('.reaction-nums')
const memoryEl = document.querySelector('.memory-nums')
const verbalEl = document.querySelector('.verbal-nums')
const visualEl = document.querySelector('.visual-nums')


fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        reactionEl.textContent = data[0].score
        memoryEl.textContent = data[1].score
        verbalEl.textContent = data[2].score
        visualEl.textContent = data[3].score

        const average = Math.round((data[0].score + data[1].score + data[2].score + data[3].score) / 4)
        scoreEl.textContent = average
        percentageEl.textContent = average + '%'
    })