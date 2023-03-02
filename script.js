let lang = 'rus'
window.onscroll = function () { scrollFunction() }

let binded = []
for (let i = 0; i < 6; i++) {
    binded.push(changeMenu.bind(null, i))
}
let tabDishes = []

{
    class Dish {
        constructor(name, engName, price, src, description = '', engDescription = '') {
            this.name = name
            this.engName = engName
            this.price = price
            this.src = src
            this.description = description
            this.engDescription = engDescription
        }
    }

    const herring = new Dish('Сельдь на бородинском хлебе', 'Herring on Borodino bread', 240, 'images/dish1.png', 'С яйцом и огурцом', 'With egg and cucumber')
    const pickles = new Dish('Соленья ассорти', 'Assorted pickles', 320, 'images/dish2.png')
    const mushrooms = new Dish('Грибы маринованные', 'Marinated mushrooms', 300, 'images/dish3.png')
    const salo = new Dish('Сало домашнее с горчицей', 'Homemade salo with mustard', 320, 'images/dish4.png')
    const salmon = new Dish('Малосольная семга', 'Salted salmon', 390, 'images/dish5.png')
    const tongue = new Dish('Язык говяжий с хреном', 'Beef tongue with horseradish', 350, 'images/dish6.png')

    let Snacks = [], Salads = [], Soups = [], MainCourses = [], Garnishs = [], Deserts = []
    Snacks.push(herring, pickles, mushrooms, salo, salmon, tongue)
    Salads.push(pickles, mushrooms, salo, salmon, tongue, herring)
    Soups.push(mushrooms, salo, salmon, tongue, herring, pickles)
    MainCourses.push(salo, salmon, tongue, herring, pickles, mushrooms)
    Garnishs.push(salmon, tongue, herring, pickles, mushrooms, salo)
    Deserts.push(tongue, herring, pickles, mushrooms, salo, salmon)
    tabDishes.push(Snacks, Salads, Soups, MainCourses, Garnishs, Deserts)
    
}


function setLang(curLang) {
    lang = curLang
}

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

        if (lang === 'rus') {
            document.querySelector('.email-box > :first-child').textContent = 'Вы вошли как'
            document.querySelector('#loginButton').querySelector('.text').textContent = 'Выйти'
        } else {
            document.querySelector('.email-box > :first-child').textContent = 'You are logged in as'
            document.querySelector('#loginButton').querySelector('.text').textContent = 'Log out'
        }
        let text = document.querySelector('#login').value
        document.querySelector('#login').remove()
        document.querySelector('.password-box').insertAdjacentHTML('beforebegin', `<p id="loginText" class="text text-header">${text}</p>`)
        document.querySelector('.password-box').remove()
        document.querySelector('#loginButton').removeEventListener('click', logIn)
        document.querySelector('#loginButton').addEventListener('click', logOut)
    }, 500)
    if (lang === 'rus') {
        document.querySelector('.header__button').textContent = 'Выйти'
    } else {
        document.querySelector('.header__button').textContent = 'Log out'
    }
    hideLogIn()
}

function logOut() {
    let appendText
    let appendButtonText
    if (lang === 'rus') {
        appendText = 'Пароль'
        appendButtonText = 'Войти'
    } else {
        appendText = 'Password'
        appendButtonText = 'Log in'
    }
    setTimeout(() => {
        document.querySelector('.email-box > :first-child').textContent = 'E-mail'
        document.querySelector('.email-box > :first-child').insertAdjacentHTML('afterend', '<input id="login" type="email" class="input login__input">')
        document.querySelector('.email-box').insertAdjacentHTML('afterend', `<div class="password-box">
        <p class="text login__text">${appendText}</p>
        <input id="password" type="password" class="input password__input">
    </div>`)
        document.querySelector('.log-in').querySelector('.text-header').remove()
        document.querySelector('#loginButton').querySelector('.text').textContent = appendButtonText
        document.querySelector('#loginButton').removeEventListener('click', logOut)
        document.querySelector('#loginButton').classList.add('button_passive')
        document.querySelector('#login').addEventListener('keydown', validEmail)
    }, 500)
    document.querySelector('.header__button').textContent = appendButtonText
    hideLogIn()
}

let validEmail = function () {
    setTimeout(() => {
        let login = document.querySelector('#login')
        let regexp = /\w{1,}@[a-z]{1,}\.[a-z]{1,}$/
        let loginButton = document.querySelector('#loginButton')
        if (login.value.match(regexp)) {
            login.style.background = 'white'
            loginButton.classList.remove('button_passive')
            loginButton.addEventListener('click', logIn)
        } else {
            login.style.background = '#ff6363'
            loginButton.classList.add('button_passive')
            loginButton.removeEventListener('click', logIn)
        }
        if (login.value === '') {
            login.style.background = 'white'
        }
    }, 0)
}

function changeMenu(target) {
    let menu__text = document.querySelectorAll('.menu__text')
    let index
    for (let i = 0; i < menu__text.length; i++) {
        if (menu__text[i].classList.contains('text_active')) {
            index = i
        }
    }
    let content = document.querySelector('.main > .content')
    content.querySelector('.text-header').textContent = menu__text[target].textContent
    menu__text[target].classList.add('text_active')
    menu__text[target].removeEventListener('click', binded[target])
    menu__text[index].classList.remove('text_active')
    menu__text[index].addEventListener('click', binded[index])

    let dishes = content.querySelectorAll('.dish')

    for (let i = 0; i < dishes.length; i++) {
        let dish = dishes[i]
        if (lang === 'eng') {
            dish.querySelector('.card__header').textContent = tabDishes[target][i].engName
            dish.querySelector('.dish__photo').alt = tabDishes[target][i].engName
            dish.querySelector('.dish__text').textContent = tabDishes[target][i].engDescription
        } else {
            dish.querySelector('.card__header').textContent = tabDishes[target][i].name
            dish.querySelector('.dish__photo').alt = tabDishes[target][i].name
            dish.querySelector('.dish__text').textContent = tabDishes[target][i].description
        }
        
        dish.querySelector('.text_price').textContent = tabDishes[target][i].price + ' ₽'
        dish.querySelector('.dish__photo').src = tabDishes[target][i].src
        
    }

}

window.addEventListener('DOMContentLoaded', () => {
    let select = document.querySelector('#select')
    select.addEventListener('click', showSelect)
    document.addEventListener('click', hideSelect)
    let header__button = document.querySelector('.header__button')
    header__button.addEventListener('click', showLogIn)
    let background = document.querySelector('.background')
    background.addEventListener('click', hideLogIn)
    let cancelButton = document.querySelector('#cancelButton')
    cancelButton.addEventListener('click', hideLogIn)
    let login = document.querySelector('#login')
    login.addEventListener('keydown', validEmail)
    let cards = document.querySelectorAll('.card')
    if (document.querySelectorAll('menu__text')) {
        let menu__text = document.querySelectorAll('.menu__text')
        menu__text.forEach((elem, index) => {
            if (!elem.classList.contains('text_active')) {
                elem.addEventListener('click', binded[index])
            }
        })
    }
    if (document.querySelector('.header__basket')) {
        let header__basket = document.querySelector('.header__basket')
        header__basket.addEventListener('click', () => {
            if (lang === 'rus') {
                window.location.href = 'basket.html'
            } else {
                window.location.href = 'eng.basket.html'
            }
        })
    }
    if (document.querySelector('.button_basket')) {
        let button_basket = document.querySelector('.button_basket')
        button_basket.addEventListener('click', () => {
            history.back()
        })
    }
    cards.forEach(card => {
        card.addEventListener('click', () => {
            if (lang === 'rus') {
                window.location.href = 'pushkin.html'
            } else {
                window.location.href = 'eng.pushkin.html'
            }
        })
    })
    if (document.querySelector('#searchRestaurants')) {
        let searchRestaurants = document.querySelector('#searchRestaurants')
        searchRestaurants.addEventListener('keydown', searchRestaurantTimeout)
    }
})