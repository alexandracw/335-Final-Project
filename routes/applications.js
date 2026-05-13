/* Handles all application-related routes 
Responibilies:  
    - displays add form
    - save applications to MongoDB
    - retrieve all applications
    - retrieve one application
    - delete/edit application later

EXAMPLE Routes 
GET /applications
GET /applications/add
POST /applications/add
GET /applications/:id
*/ 
const express = require("express");

const router = express.Router();

const Application = require("../models/Application");

router.get("/add", (req, res) => {
  res.render("addApplication");
});

router.post("/add", async (req, res) => {

  const companyDomain = req.body.companyDomain;

  const logoUrl = `https://img.logo.dev/${companyDomain}`;

  const newApplication = new Application({
    company: req.body.company,
    companyDomain: companyDomain,
    logoUrl: logoUrl,
    role: req.body.role,
    status: req.body.status,
    appliedDate: req.body.appliedDate,
    location: req.body.location,
    applicationLink: req.body.applicationLink,
    notes: req.body.notes
  });

  await newApplication.save();

  res.redirect("/applications");
});

router.post("/delete", async (req, res) => {
  await Application.findByIdAndDelete(req.body.id);
  res.redirect("/applications");
});

router.get("/", async (req, res) => {

  const applications = await Application.find();

  res.render("applications", {
    applications: applications
  });

});

module.exports = router;