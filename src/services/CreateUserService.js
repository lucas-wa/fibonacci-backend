const prisma = require("../prisma")

module.exports = class CretaeUserService {
    async create({email, name}){
        
        const user = await prisma.user.create({
            data: {
                email: email,
                name: name
            }
        });

        return user;
    }
}
