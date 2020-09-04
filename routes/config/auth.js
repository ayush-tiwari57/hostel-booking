const jwt = require("jsonwebtoken");

module.exports = async (req,res,next) => {
    try{
        let token = req.body.token;
        if(!token){
            return res.status(401).send({
                message: "Unauthorized"
            });
        }
        let user = await jwt.verify(value,"123");
    }
    catch(err){
        res.status(500).send({
            message: "Somethng went wrong"
        });
    }

    next();
}