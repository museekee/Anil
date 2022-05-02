const express = require("express");
const app = express();
const { MLog } = require("./module/Log");

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
    MLog("메인 페이지 접속", req)
});

app.use(express.static(`${__dirname}/public`));
app.use("/board", require(`${__dirname}/routers/board`));
app.use("/widg", require(`${__dirname}/routers/widg`))

app.listen(80);