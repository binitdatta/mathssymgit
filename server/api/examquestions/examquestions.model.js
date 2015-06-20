'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AnswerSchema = new Schema({
    answerid  : {type: String, required: false },
	answertype: {type: String, required: false},
    answer: { type: String, required: false }
});

var DependentQuestionSchema = new Schema({
  id: { type: String, required: false },
  part: { type: String, required: false },
  problem: { type: String, required: false },
  date:     { type: Date,   required: false, default: Date.now },
  answer  : [AnswerSchema]
});

var ExamQuestionSchema = new Schema({
  id: { type: String, required: false },
  basicfact: { type: String, required: false },
  questiontype: { type: String, required: false },
  grade: { type: String, required: false },
  part: { type: String, required: false },
  problem: { type: String, required: false },
  explanation:{ type: String, required: false },
  date:     { type: Date,   required: false, default: Date.now },
  answer  : [AnswerSchema],
  dependentquestion: [DependentQuestionSchema]
});

module.exports = mongoose.model('Examquestions', ExamQuestionSchema);
module.exports = mongoose.model('DependentQuestion', DependentQuestionSchema);
module.exports = mongoose.model('Examquestions', ExamQuestionSchema);
