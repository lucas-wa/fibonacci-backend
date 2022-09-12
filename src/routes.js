const express = require(`express`);
const routes = express.Router();

const createUserController = require("./controllers/CreateUserController");

routes.get("/", (req, res) => {
    return res.send("Home page");
});

routes.post("/createUsers", new createUserController().execute)

module.exports = routes;