const router = require("express").Router();
const mongoose = require("mongoose");
const auth = require("./config/auth");
const room = require("../models/room");
const user = require("../models/user");

router.post('/bookroom', auth, async (req,res) =>{
    try{
        const roomno = req.body.roomno;
        const userdata = req.userdata;
        res.send({
            roomno,
            userdata
        });
    }
    catch(err){
        console.log(err)
        res.status(500).send({
            message: "somthing went wrong"
        });
    }
});

module.exports = router;