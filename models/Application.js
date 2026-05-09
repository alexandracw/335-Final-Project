/* Defines the MongoDB schema using Mongoose
Responsibilites:
- Creates the structure for the internship applications
- Stores: company name, role title, application status, notes
            logo URL, dates, links

    
*/ 
const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  company: String,
  companyDomain: String,
  logoUrl: String,
  role: String,
  status: String,
  appliedDate: Date,
  location: String,
  applicationLink: String,
  notes: String
});

module.exports = mongoose.model("Application", applicationSchema);