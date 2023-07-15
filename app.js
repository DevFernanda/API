const express = require("express");
const rotaPastel = require('./rotas/pastel');
const cors = require('cors');

const app = express();
// aplicação aceita receber body do tipo json
app.use(express.json());
app.use(cors());
app.use('/pasteis', rotaPastel)

const port = 8000;

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
})