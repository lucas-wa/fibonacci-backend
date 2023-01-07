const authenticateService = require("../services/AuthenticateService");


module.exports = class AuthenticateController {
    async execute(req, res){
        const {email, password} = req.body;



        const service = new authenticateService();
        const user = await service.authenticate({email, password});

        return res.status(200).json({
            success:true,
            redirectUrl: "/dashboard"
        })
    }
}