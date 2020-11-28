const myButtons = document.querySelectorAll('.btn')
myButtons.forEach(button => {
    button.addEventListener('click', (event) => event.preventDefault())
})