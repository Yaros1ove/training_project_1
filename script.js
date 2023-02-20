window.onscroll = function () { scrollFunction() }

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = 'block'
    } else {
        document.getElementById("topBtn").style.display = 'none'
    }
}

function scrollToTop() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}
let hideSelect = function () {
    let select_hidden = document.querySelector('#select_hidden')
    if (select_hidden.style.display === 'flex') {
        select_hidden.style.display = 'none'
        let select__arrow = document.querySelector('.select__arrow')
        select__arrow.style.transform = 'rotate(0deg)'
    } else if (select_hidden.style.display === 'block') {
        select_hidden.style.display = 'flex'
        let select__arrow = document.querySelector('.select__arrow')
        select__arrow.style.transform = 'rotate(180deg)'
    }
}

let showSelect = function () {
    let select_hidden = document.querySelector('#select_hidden')
    if (select_hidden.style.display === 'flex') {
        select_hidden.style.display = 'none'
        let select__arrow = document.querySelector('.select__arrow')
        select__arrow.style.transform = 'rotate(0deg)'
    } else {
        select_hidden.style.display = 'block'
    }
}

let searchRestaurant = function () {
    let isFound = false
    let cards = document.querySelectorAll('.card')
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].querySelector('.text-cousine').textContent.trim().toLowerCase().includes(document.querySelector("#searchRestaurants").value.trim().toLowerCase()) || cards[i].querySelector('.card__header').textContent.trim().toLowerCase().includes(document.querySelector("#searchRestaurants").value.trim().toLowerCase())) {
            cards[i].style.display = ''
            document.querySelector('.text_hidden').style.display = 'none'
            isFound = true
        } else {
            cards[i].style.display = 'none'
        }
    }
    if (!isFound) {
        document.querySelector('.text_hidden').style.display = 'inline'
    }
}

let searchRestaurantTimeout = function () {
    setTimeout('searchRestaurant()', 0)
}

let showLogIn = function () {
    document.querySelector('.log-in').style.top = '10%'
    document.querySelector('body > :first-child').style.visibility = 'visible'
    document.querySelector('body > :first-child').style.opacity = '45%'
}

let hideLogIn = function () {
    document.querySelector('.log-in').style.top = '-300px'
    document.querySelector('body > :first-child').style.opacity = '0%'
    setTimeout(() => { document.querySelector('body > :first-child').style.visibility = 'hidden' }, 500)
}

function logIn() {
    setTimeout(() => {
        document.querySelector('.email-box > :first-child').textContent = 'Вы вошли как'
        let text = document.querySelector('#login').value
        document.querySelector('#login').remove()
        document.querySelector('.password-box').insertAdjacentHTML('beforebegin', `<p id="loginText" class="text text-header">${text}</p>`)
        document.querySelector('.password-box').remove()
        document.querySelector('#loginButton').querySelector('.text').textContent = 'Выйти'
        document.querySelector('#loginButton').removeEventListener('click', logIn)
        document.querySelector('#loginButton').addEventListener('click', logOut)
    }, 500)
    document.querySelector('.header__button').textContent = 'Выйти'
    hideLogIn()
}

function logOut() {
    setTimeout(() => {
        document.querySelector('.email-box > :first-child').textContent = 'E-mail'
        document.querySelector('.email-box > :first-child').insertAdjacentHTML('afterend', '<input id="login" type="email" class="input login__input">')
        document.querySelector('.email-box').insertAdjacentHTML('afterend', `<div class="password-box">
        <p class="text login__text">Пароль</p>
        <input id="password" type="password" class="input password__input">
    </div>`)
    document.querySelector('.log-in').querySelector('.text-header').remove()
    document.querySelector('#loginButton').querySelector('.text').textContent = 'Войти'
    document.querySelector('#loginButton').removeEventListener('click', logOut)
    document.querySelector('#loginButton').classList.add('button_passive')
    document.querySelector('#login').addEventListener('keydown', validEmail)
    }, 500)
    document.querySelector('.header__button').textContent = 'Войти'
    hideLogIn()
}

let validEmail = function () {
    setTimeout(() => {
        let login = document.querySelector('#login')
        let regexp = /\w{1,}@[a-z]{1,}\.[a-z]{1,}$/
        let loginButton = document.querySelector('#loginButton')
        if (login.value.match(regexp) || login.value === '') {
            login.style.background = 'white'
            loginButton.classList.remove('button_passive')
            loginButton.addEventListener('click', logIn)
        } else {
            login.style.background = '#ff6363'
            loginButton.classList.add('button_passive')
            loginButton.removeEventListener('click', logIn)
        }
    }, 0)
}

window.addEventListener('DOMContentLoaded', () => {
    let select = document.querySelector('#select')
    select.addEventListener('click', showSelect)
    document.addEventListener('click', hideSelect)
    let searchRestaurants = document.querySelector('#searchRestaurants')
    searchRestaurants.addEventListener('keydown', searchRestaurantTimeout)
    let header__button = document.querySelector('.header__button')
    header__button.addEventListener('click', showLogIn)
    let background = document.querySelector('.background')
    background.addEventListener('click', hideLogIn)
    let cancelButton = document.querySelector('#cancelButton')
    cancelButton.addEventListener('click', hideLogIn)
    let login = document.querySelector('#login')
    login.addEventListener('keydown', validEmail)
})