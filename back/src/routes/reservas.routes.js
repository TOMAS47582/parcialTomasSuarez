const { Router } = require("express");
const router = Router();

// TODO: importar los controladores y definir GET /, POST / y PUT /:id/pago.
const {
  listarReservas,
  crearReserva,
  registrarPago,
} = require('../controllers/reservasController');



router.get('/', listarReservas);
router.post('/', crearReserva);
router.put('/:id/pago', registrarPago);

module.exports = router;