const express = require("express");
const router = express.Router();

router.get("/", (res, req) => {
    req.send("안녕");
});

module.exports = router;