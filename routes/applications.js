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

router.get("/add", (req, res) => {
  res.render("addApplication");
});

module.exports = router;