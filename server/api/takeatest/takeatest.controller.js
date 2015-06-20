'use strict';
 var mongoose = require('mongoose');
var _ = require('lodash');
var Takeatest = require('./takeatest.model');
var ExamQuestion = require('../examquestions/examquestions.model');

// Get list of takeatests
exports.index = function(req, res) {
  ExamQuestion.find(function (err, takeatests) {
    if(err) { return handleError(res, err); }
    return res.json(200, takeatests);
  });
};

// Get a single takeatest
exports.show = function(req, res) {
  Takeatest.findById(req.params.id, function (err, takeatest) {
    if(err) { return handleError(res, err); }
    if(!takeatest) { return res.send(404); }
    return res.json(takeatest);
  });
};

// Creates a new takeatest in the DB.
exports.create = function(req, res) {
  var id = mongoose.Types.ObjectId();
  console.log(req.body);
  console.log(req.body._questionid);
  
  var questionid = req.body._questionid;

  var local_exam_question = ExamQuestion.findOne({_id: questionid});
  console.log('	_questionid :'+questionid);

  //console.log(local_exam_question);

console.log(req.body.primaryanswer);
console.log(req.body.dependentanswer);
console.log(req.body.grade);
console.log(req.body.part);
console.log(req.body.username);
console.log(local_exam_question);

console.log(local_exam_question.explanation);

  var takeatest = new Takeatest({
    id: mongoose.Types.ObjectId(),
    examquestion: req.body._questionid,
	primaryanswer: req.body.primaryanswer,
	dependentanswer:req.body.dependentanswer,
	grade:req.body.grade,
	userid:req.body.part,
	username:req.body.username,
	useremail:req.body.useremail,
	primaryexplanation:	 req.body.primaryexplanation});
	//,dependentexplanation:local_exam_question.dependentquestion[0].explanation
  //});

  /*takeatest.save(req.body, function(err, takeatest) {
    if(err) { return handleError(res, err); }
    return res.json(201, takeatest);
  }); */

   takeatest.save(function (err, takeatest) {
    if (err) { 
		//return next(err)
		console.log(err);
		return;
	}
    res.status(201).json(takeatest)
  });

};

// Updates an existing takeatest in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Takeatest.findById(req.params.id, function (err, takeatest) {
    if (err) { return handleError(res, err); }
    if(!takeatest) { return res.send(404); }
    var updated = _.merge(takeatest, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, takeatest);
    });
  });
};

// Deletes a takeatest from the DB.
exports.destroy = function(req, res) {
  Takeatest.findById(req.params.id, function (err, takeatest) {
    if(err) { return handleError(res, err); }
    if(!takeatest) { return res.send(404); }
    takeatest.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}