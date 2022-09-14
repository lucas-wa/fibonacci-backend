const prisma = require("../prisma")

module.exports = class CretaeUserService {
    async create({email, name}){

        
        if(!email) throw new Error("Email is required!");
        if(!name) throw new Error("Name is required!");

        const userAlredyExists = prisma.user.findUnique({
            where:{
                email: email
            }
        });

        if(userAlredyExists) throw new Error("User already exits");

        const user = await prisma.user.create({
            data: {
                email: email,
                name: name
            }
        });

        return user;
    }
}
