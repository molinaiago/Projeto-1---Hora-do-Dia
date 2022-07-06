function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imgmanha')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas!<br>`

if (hora >=5 && hora < 12) {
    msg.innerHTML += 'Bom dia! Já tomou seu café?'
    img.src = 'manha.png'
    document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora <= 18) {
msg.innerHTML += 'Boa tarde! Já tomou seu café da tarde?'
img.src = 'tarde.png'
document.body.style.background = '#b9846f'
} else {
    msg.innerHTML += 'Boa noite! Já jantou?'
    img.src = 'noite.png'
    document.body.style.background = '#2b333b'
}
}