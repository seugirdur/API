// const {EventEmitter} = require("events")

// const ev = new EventEmitter()

// ev.once('saySomething', (a) => {
//     console.log('I give upon on you ' + a)

// })

// ev.emit('saySomething', "gabe")
// ev.emit('saySomething', "lmao")

const {inherits} = require('util')
const {EventEmitter} = require('events')

function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin Colorado');
chapolin.on('help', () => console.log(`eu! o ${chapolin.name}`))

console.log("oh e agora quem vai me defender?")
chapolin.emit('help')