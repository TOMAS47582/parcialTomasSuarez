const { Router } = require("express");
const router = Router();

// TODO: importar el controlador y definir GET /recaudacion.

const { recaudacionPorCancha } = require('../controllers/reportesController');


router.get('/recaudacion', recaudacionPorCancha);

module.exports = router;
