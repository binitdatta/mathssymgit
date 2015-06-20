'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ContactusSchema = new Schema({
  firstname: { type: String, required: false },
  lastname: { type: String, required: false },
  username: { type: String, required: false },
  emailid: { type: String, required: false },
  remarks: { type: String, required: false }
});



module.exports = mongoose.model('Contactus', ContactusSchema);