const createUserService = require("../services/CreateUserService");

module.exports = class CreateUsercontroller {
    async execute(req, res){
        const {email, name} = req.body;

        if(!email) throw new Error("Email is required!")
        if(!name) throw new Error("Name is required!")

        const service = new createUserService();

        const result = await service.create({email, name});

        return res.json(result);
    }
}