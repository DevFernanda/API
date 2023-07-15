const { getTodosPasteis, inserePastel, getPastelPorId } = require("../servicos/pasteis");

function getPasteis(req, res) {
    try {
        const pasteis = getTodosPasteis()
        res.send(pasteis)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getPastel(req, res) {
    try {
        const id = req.params.id;
        const pastel = getPastelPorId(id)
        res.send(pastel)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postPastel(req, res) {
    try {
        const pastelNovo = req.body;
        inserePastel(pastelNovo);
        res.status(201);
        res.send('{"message":"Pastel inserido com sucesso"}')
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getPasteis,
    getPastel,
    postPastel
}