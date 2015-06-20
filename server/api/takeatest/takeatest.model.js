'use strict';

var ExamQuestion = require('../examquestions/examquestions.model');

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TakeATestSchema = new Schema({
  id: { type: String, required: false },
  examquestion : {type: mongoose.Schema.Types.ObjectId, ref: 'ExamQuestion'},
  primaryanswer: { type: String, required: false },
  dependentanswer: { type: String, required: false },
  grade: { type: String, required: false },
  userid: { type: String, required: false },
  username: { type: String, required: false },
  useremail: { type: String, required: false },
  primaryexplanation:{ type: String, required: false },
  dependentexplanation:{ type: String, required: false },
  date:     { type: Date,   required: false, default: Date.now }
});

module.exports = mongoose.model('Takeatest', TakeATestSchema);
