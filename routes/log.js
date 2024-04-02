const express = require('express');
const router = express.Router();
const LogController =  require("../controllers/LogController");


router.post('/', LogController.store);


module.exports = router;