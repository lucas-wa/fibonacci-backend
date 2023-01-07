const prisma = require("../prisma");
const {compare} = require("bcryptjs");

module.exports = class AuthenticateService {
    async authenticate({email, password}){

        const user = await prisma.user.findUnique({
            where:{
                email: email
            }
        });

        if(!user) throw new Error("Email or password is wrong");


        const verifyPass = await compare(password, user.password);


        
        if(!verifyPass) throw new Error("Email or password is wrong"); 

        return user;
    }
}