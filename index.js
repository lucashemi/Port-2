const botaoMenu = document.querySelector('.header__botao')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})

const main = document.querySelector('.container')

main.addEventListener('click', () => {
    menu.classList.remove('menu-lateral--ativo')
})