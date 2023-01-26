const mais = document.querySelectorAll('.mais');
const menos = document.querySelectorAll('.menos');
const contador = document.querySelectorAll('.controle-contador');
const estats = document.querySelectorAll('.estatistica-numero');
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

for (let c = 0; c < mais.length; c++) {
    
    mais[c].addEventListener('click', (e) => {
        estats.forEach(d => {
            // console.log(e.target.classList[2])
            // console.log(d.classList[1])
            // console.log(d.textContent)
            // console.log(pecas["bracos"][d.classList[1]])
            d.textContent = parseInt(d.textContent) + pecas[e.target.classList[2]][d.classList[1]];
        });
        contador[c].value++;
    });

    menos[c].addEventListener('click', (e) => {
        if(contador[c].value != 0) {
            estats.forEach(d => {
                d.textContent = parseInt(d.textContent) - pecas[e.target.classList[2]][d.classList[1]];
            });
            contador[c].value--;
        }
    });
}


    