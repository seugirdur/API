const tempo = 500
const checando = () => console.log('checando...')

let intervalo = setInterval(checando, tempo)


setTimeout( () => clearInterval(intervalo), 3000)