const JWT = require("jsonwebtoken");
reuire("dotenv").config();

export const reuireSignIn = async(req, res, next) => {
    try{
        const decode = JWT.verify(req.headers.authorization, process.env.Secret.Code);
        next();
    }catch(err){
        console.log(err);
    }
}