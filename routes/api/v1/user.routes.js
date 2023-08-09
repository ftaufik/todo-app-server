const bodyParser = require('body-parser')
const userControllerAPI = require('../../../controllers/api/v1/user.api.controller')

// const jsonParser = bodyParser.json()
const router = require("express").Router()
require("express-group-routes");

router.post('/login', userControllerAPI.login)

module.exports = router;
