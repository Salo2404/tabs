const links = document.querySelectorAll('a')
const tabs = document.querySelectorAll('.tab')
const menu = document.querySelector('.menu')

menu.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;

    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove('active')
        target.classList.add('active')

        tabs[i].classList.remove('active')

        if (links[i].classList.contains('active')) {
            tabs[i].classList.add('active')
        }
    }
})