const perguntas = [
    'O que aprendi hoje?',
    "O que me deixou aborrecido?",
    "o que me deixou feliz hoje?",
    "quantas pessoas eu ajudei hoje?",
]

const perguntar = ( i = 0) => {
    process.stdout.write("\n\n" + perguntas[i] + " > ")
}

perguntar()

const respostas = []

process.stdin.on("data",data => {
    respostas.push(data.toString().trim())
    if(respostas.length < perguntas.length) {
        perguntar(respostas.length)
    } else {
        console.log(respostas)
        process.exit()
    }  
})

process.on("exit", () => {
    
    console.log(`teste
    sdaodasdoasdsd nem fodendo
    serio?
    porra devia saber antes
    ${respostas[1]}`)
}
)
