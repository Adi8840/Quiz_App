const express = require("express");
const {
  quesFun,
  submitTest,
  resultFun,
} = require("../controller/questionsFun");
const router = express.Router();
const axios = require("axios");
router.get("/home", (req, res) => {
  res.render("home.ejs");
});

router.get("/questions/:id", quesFun);
router.post("/questions/:id", quesFun);
router.get("/submit", submitTest);
router.get("/result", resultFun);
router.post("/result", resultFun);
module.exports = router;
