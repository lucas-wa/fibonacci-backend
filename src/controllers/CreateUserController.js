const createUserService = require("../services/CreateUserService");

module.exports = class CreateUsercontroller {
    async execute(req, res){
        const {email, name, password} = req.body;


        const service = new createUserService();

        const result = await service.create({email, name, password});

        return res.json(result);
    }
}