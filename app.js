const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(80);

app.use("/board", require("./routers/board"));