const router = require("express").Router();
const mongoose = require("mongoose");
const auth = require("./config/auth");
const room = require("../models/room");


// post request for adding new room
// required data- roomno
router.post("/addroom",auth,async (req,res) =>{
    try{
        const roomno = req.body.roomno;
        let data = await room.findOne({roomno});
        if(data){
            res.send({
                message: "Room already exists"
            });
        }
        else{
            const newroom = new room({
                roomno
            });
            res.send({
                message: "new room added",
                data: newroom
            });
        }
    }
    catch(err){
        res.status(500).send({
            message: 'Somthing went wrong'
        });
    }
});

module.exports = router;