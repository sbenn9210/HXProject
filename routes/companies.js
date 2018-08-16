const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require("../models/index");

// @route GET /register/company
// @desc
// @access Protected
router.get("/register", (req, res) => {
  res.render("register-company", {
    title: "Register a Company"
  });
});

// @route POST /register/company
// @desc
// @access Protected
router.post("/register", (req, res) => {});

// display companies on /companies page
router.get("", function(req, res) {
  db.Company.findAll().then(function(companies) {
    res.render("companies", { companyList: companies });
  });
});

router.post("/companies", (req, res) => {
  db.Company.findAll({ where: j }).then();
});

module.exports = router;
