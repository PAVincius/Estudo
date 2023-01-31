const EventEmitter = require('events')
class MyEmitter extends EventEmitter {

}
const myEmitter = new MyEmitter()
const nomeEvento = 'usuario:click'
myEmitter.on(nomeEvento, function (click) {
    console.log('um usuario clicou', click)
})


// myEmitter.emit(nomeEvento, 'na barra de rolagem')
// myEmitter.emit(nomeEvento, 'no ok')

// let count = 0
// setInterval(function () {
//     myEmitter.emit(nomeEvento, 'no ok' + (count++))

// }, 1000)

const stdin = process.openStdin()

function main() {
    return new Promise(function (resolve, reject) {
        stdin.addListener('data', function (value) {
            // console.log(`Voce digitou: ${value.toString().trim()}`)
            return resolve(value)
        })
    })
}
main().then(function (resultado) {
    console.log('resultado', resultado.toString())
})