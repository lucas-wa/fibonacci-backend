const express = require(`express`);
const routes = express.Router();

const createUserController = require("./controllers/CreateUserController");
const authenticateController = require("./controllers/AuthenticateController");

routes.get("/", (req, res) => {
    return res.send("Home page");
});

routes.post("/createUsers", new createUserController().execute)
routes.post("/authenticateUser", new authenticateController().execute)

module.exports = routes;