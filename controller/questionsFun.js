const express = require("express");
const axios = require("axios");

const router = express.Router();
const answer = [];
const quesFun = async (req, res) => {
  try {
    const ques = await axios.get(`http://localhost:4000/questions`);

    const ans = req.body.quess;
    const id = parseInt(req.params.id, 10);
    if (id > 0) {
      if (ans == ques.data[id - 1].answer) {
        answer.push(true);
      } else {
        answer.push(false);
      }
    }
    //console.log(answer);
    const data = ques.data.filter((val) => {
      if (val.id == id) {
        return val;
      }
    });
    //console.log(id, data[0].answer);
    if (id > 9) {
      res.redirect("/submit");
    } else {
      res.render("question", { data: data[0], id: id + 1 });
    }
  } catch (error) {
    console.log("Some Error occurs");
  }
};

const submitTest = (req, res) => {
  res.render("submitPage");
};

const resultFun = (req, res) => {
  const { name, email } = req.body;
  const colarr = [];
  let correctques = 0;
  answer.forEach((val) => {
    if (val == false) {
      colarr.push("red");
    } else {
      colarr.push("green");
      correctques++;
    }
  });
  let percentage = 0;
  if (correctques > 0) {
    percentage = (correctques / 10) * 100;
  }
  //console.log(colarr);
  res.render("result", { colarr, name, email, correctques, percentage });
};
module.exports = { quesFun, submitTest, resultFun };
