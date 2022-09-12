const prisma = require("../prisma")

module.exports = class CretaeUserService {
    async create({email, name}){
        const user = prisma.user.create({
            data: {
                email,
                name
            }
        });

        return user;
    }
}
