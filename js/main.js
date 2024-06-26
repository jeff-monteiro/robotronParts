const control = document.querySelectorAll('[data-controle]');
const statistics = document.querySelectorAll('[data-estatistica]')
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

control.forEach( (element) => {
    element.addEventListener('click', (event) => {
        dataMan(event.target.dataset.controle, event.target.parentNode)
        updateStatistics(event.target.dataset.pecas)
    })
})

function dataMan(operation, controle){
    const peca = controle.querySelector('[data-contador]');

    if(operation === '-'){
        peca.value = parseInt(peca.value) - 1
    }else{
        peca.value = parseInt(peca.value) + 1
    }
}
//Adding comments here to test
function updateStatistics(peca){
    statistics.forEach( (element) => {
        element.textContent = parseInt(element.textContent) + pecas[peca][element.dataset.estatistica]
    })
}
