const {Router} = require('express');
const { sedeGET, sedePOST } = require('../controllers/sedes');


const router = Router();

router.get("/", sedeGET);

router.post("/", sedePOST);


module.exports = router;