const router = require("express").Router();

router.post("/addroom",async (req,res) =>{
    try{
        
    }
    catch(err){
        res.status(500).send({
            message: 'Somthing went wrong'
        });
    }
});

module.exports = router;