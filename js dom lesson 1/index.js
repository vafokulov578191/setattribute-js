let img = document.querySelector('.click__btn')

let Alpine__Green = document.querySelector('.main__middle__item__btns')
let Silver = document.querySelector('.main__middle__item__btns1')
let Gold = document.querySelector('.main__middle__item__btns2')
let Graphite = document.querySelector('.main__middle__item__btns3')
let Sierra__Blue = document.querySelector('.main__middle__item__btns4')

Alpine__Green.onclick = () => {
    img.setAttribute('src', './img/iphone-13-pro-max-green-select.png')
}

Silver.onclick = () => {
    img.setAttribute('src', './img/iphone-13-pro-max-silver-select.png')
}

Gold.onclick = () => {
    img.setAttribute('src', './img/iphone-13-pro-max-gold-select.png')
}

Graphite.onclick = () => {
    img.setAttribute('src', './img/iphone-13-pro-max-graphite-select.png')
}

Sierra__Blue.onclick = () => {
    img.setAttribute('src', './img/iphone-13-pro-max-blue-select.png')
}
