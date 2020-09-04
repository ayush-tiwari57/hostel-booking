const router = require("express").Router();
const user = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/signup",async (req,res) => {
    try{

        let{
            name,
            email,
            rollno,
            password,
        }=req.body;
        let data = await user.findOne({rollno})
    
            if(data){
                res.send({
                    message: "User already exists"
                })
            }
            else{
                let hashed_passsword = await bcrypt.hash(password,10);
                password = hashed_passsword;
                const User = new user({
                    name,
                    email,
                    rollno,
                    password,
                })
                let info = await User.save();
                res.send({
                    message: "Data saved",
                    data: info
                })
                
            }
    }
    catch(err){
        res.status(500).send({
            message: "Something went wrong"
        });
    }
});



module.exports = router;