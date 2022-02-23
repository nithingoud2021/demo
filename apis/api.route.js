var express = require("express");
var router = express.Router()
var user = require('../controllers/user_controller');


router.post('/login',user.login);




module.exports=router;