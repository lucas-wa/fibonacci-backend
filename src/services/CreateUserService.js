const prisma = require("../prisma");
const {hash} = require("bcryptjs");

module.exports = class CretaeUserService {
    async create({email, name, password}){

        
        if(!email) throw new Error("Email is required!");
        if(!name) throw new Error("Name is required!");

        const userAlredyExists = await prisma.user.findUnique({
            where:{
                email: email
            }
        });

        if(userAlredyExists) throw new Error("User already exits");

       const passwordHash = await hash(password, Math.random());


        const user = await prisma.user.create({
            data: {
                email: email,
                name: name,
                password: passwordHash
            }
        });

        return user;
    }
}
