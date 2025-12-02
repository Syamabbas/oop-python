// document.title = 'Fikri'
// console.log(document.body)
// const body = document.body
// body.append('Hello World')

// const h1 = document.createElement('h1')
// h1.textContent = "ASIK INI H1"
// body.append(h1)

// const namaSaya = document.createElement('p')
// namaSaya.innerHTML = 'DEA'

// const namaKamu = document.createElement('')

// body.append(h1)
// body.append(namaSaya)

document.title = 'Fikri'
const body = document.body
const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('.btn2')

const defaultText = 'Klik saya 1'
btn1.textContent = defaultText

btn1.style.border = "none"
btn1.style.padding = '8px'
btn1.style.fontSize = '24px'
btn1.style.background = 'blue'

function clickButton() {
    btn1.style.background = 'aqua'
    const newText = document.createElement(`p`)
    newText.textContent = "HALO APAKABAR"
    body.append(newText)
}

function ubahText(){
    btn1.textContent = 'Hihihii hahhaa'
}

function oriText() {
    btn1.textContent = defaultText
}