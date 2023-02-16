window.onscroll = function() {scrollFunction()}

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
let hideSelect = function() {
    let select_hidden = document.querySelector('#select_hidden')
    if(select_hidden.style.display === 'flex') {
        select_hidden.style.display = 'none'
        let select__arrow = document.querySelector('.select__arrow')
        select__arrow.style.transform = 'rotate(0deg)'
    } else if (select_hidden.style.display === 'block') {
        select_hidden.style.display = 'flex'
        let select__arrow = document.querySelector('.select__arrow')
        select__arrow.style.transform = 'rotate(180deg)'
    }
}

let showSelect = function() {
    let select_hidden = document.querySelector('#select_hidden')
    if (select_hidden.style.display === 'flex') {
        select_hidden.style.display = 'none'
        let select__arrow = document.querySelector('.select__arrow')
        select__arrow.style.transform = 'rotate(0deg)'
    } else {
        select_hidden.style.display = 'block'
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    let select = document.querySelector('#select')
    select.addEventListener('click', showSelect)
    document.addEventListener('click', hideSelect)
})