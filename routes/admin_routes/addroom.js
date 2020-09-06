const router = require("express").Router();
const mongoose = require("mongoose");
const room = require("../../models/room");

router.post("/addroom",async (req,res) =>{
    try{
        const roomno = req.body.roomno;
        let data = await room.findOne({roomno});
        if(data){
            res.send({
                message: "Room already exists"
            });
        }
        else{
            
        }
    }
    catch(err){
        res.status(500).send({
            message: 'Somthing went wrong'
        });
    }
});

module.exports = router;