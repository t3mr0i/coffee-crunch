const express = require("express");
const app = express();
const routes = require("./routes");
const sequelize = require("./config/database");

app.use(express.json());
app.use(routes);

sequelize.sync()
  .then(() => {
    app.listen(3001, () => console.log("Server running on port 3001"));
  })
  .catch(err => console.log(err));
