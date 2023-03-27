const {Router} = require('express');
const { remitoGET, remitoPOST } = require('../controllers/remitos');



const router = Router();

router.get("/", remitoGET);

router.post("/", remitoPOST);


module.exports = router;