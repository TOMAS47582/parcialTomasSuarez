const { Router } = require("express");
const router = Router();


// TODO: importar el controlador y definir GET /.
const { listarCanchas } = require('../controllers/canchasController');


router.get('/', listarCanchas);

module.exports = router;


