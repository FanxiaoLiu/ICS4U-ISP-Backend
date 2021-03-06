const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.calendar = require("./calendar.model.js")(mongoose);
db.labRecords = require("./labRecords.model.js")(mongoose);
db.notes = require("./notes.model.js")(mongoose);
db.patientHistory = require("./patientHistory.model.js")(mongoose);
db.patients = require("./patients.model.js")(mongoose);
db.users = require("./users.model.js")(mongoose);
db.sample = require("./main.model.js")(mongoose);
module.exports = db;