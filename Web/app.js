const express = require("express");
const app = express();

app.use(express.static(`${__dirname}/public`));
app.use("/board", require(`${__dirname}/routers/board`));

app.listen(80);