const { Router} = require("express");
const { getPastel, getPasteis, postPastel } = require("../controladores/pastel")

const router = Router();

router.get('/', getPasteis);

router.get('/:id', getPastel);

router.post('/', postPastel)

module.exports = router;