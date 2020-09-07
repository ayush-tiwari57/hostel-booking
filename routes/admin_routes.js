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
        // console.log(data);
        if(data){
            res.status(409).send({
                message: "Room already exists"
            });
        }
        else{
            const newroom = new room({
                roomno
            });
            let info = await newroom.save();
            res.send({
                message: "new room added",
                data: info
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