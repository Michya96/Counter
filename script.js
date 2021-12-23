const button = document.querySelector('[data-button]')
const value = document.querySelector('[data-value]')

button.addEventListener('click', () => {
        value.innerHTML = parseFloat(value.innerText)+1
    })