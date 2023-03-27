const {Router} = require('express');
const { stockGET, stockPOST } = require('../controllers/stock');


const router = Router();

router.get("/", stockGET);

router.post("/", stockPOST);


module.exports = router;