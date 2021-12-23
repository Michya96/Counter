const button = document.querySelector('[data-button]')
const flip = document.querySelector('[background-button]')
const value = document.querySelector('[data-value]')
const text = document.querySelector('.window')

button.addEventListener('click', () => {
        value.innerHTML = parseFloat(value.innerText)+1
    })

flip.addEventListener('click', () => {
        let rand1 = Math.random()
        let rand2 = Math.random()
        let rand3 = Math.random()
        document.body.style.backgroundColor = `rgb(${rand1*255},${rand2*255},${rand3*255})`
    })