const express = require('express');
const router = express.Router();
const { insertdata } = require('../controller/demo')

router.post("/api/insertdata", insertdata)

module.exports = router