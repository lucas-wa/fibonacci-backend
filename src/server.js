const express = require(`express`);
require('express-async-errors');
const app = express();
app.use(express.json());

const routes = require("./routes");

app.use(routes);

app.use(
    (err, req, res, next) => {
      // Verifica se é um erro tratado pela aplicação
      if (err instanceof Error) {
        return res.status(400).json({
          error: err.message
        });
      }
  
      // Se não é tratado
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error"
      });
    }
  );


app.listen(3000, () => {
    console.log("Server is running!")
})
