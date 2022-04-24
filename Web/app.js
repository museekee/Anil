const express = require("express");
const app = express();
const Log = require("./../ASM/ShowLog");

app.get("/", (res, req) => {
    console.log(res.ip);
    Log.makeMsg(res.ip);
})
app.use(express.static(`${__dirname}/public`));
app.use("/board", require(`${__dirname}/routers/board`));

app.listen(80);