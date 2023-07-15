const fs = require("fs");

function getTodosPasteis() {
    return JSON.parse(fs.readFileSync("pastel.json"))
}

function getPastelPorId(id) {
    const pasteis = JSON.parse(fs.readFileSync("pastel.json"))

    const pastelFiltrado = pasteis.filter(livro => livro.id === id )[0];

    return pastelFiltrado
}

function inserePastel(pastelNovo) {
    const pasteis = JSON.parse(fs.readFileSync("pastel.json"))

    const novaListaDePasteis = [...pasteis, pastelNovo];

    fs.writeFileSync('pastel.json', JSON.stringify(novaListaDePasteis))
}

module.exports = {
    getTodosPasteis,
    getPastelPorId,
    inserePastel
}