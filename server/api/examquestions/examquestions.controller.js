'use strict';

var mongoose = require('mongoose');



var _ = require('lodash');
var ExamQuestion = require('./examquestions.model');
var DependentQuestion = require('./examquestions.model');
var Answer = require('./examquestions.model');

// Get list of examquestionss
exports.index = function(req, res) {

	 ExamQuestion.find().sort('-date').exec(function (err, examquestions) {
		if (err) { return next(err) }
				res.json(examquestions)
		});

  /*Examquestions.find(function (err, examquestionss) {
    if(err) { return handleError(res, err); }
    return res.json(200, examquestionss);
  });*/
};

// Get a single examquestions
exports.show = function(req, res) {
  ExamQuestion.findById(req.params.id, function (err, examquestions) {
    if(err) { return handleError(res, err); }
    if(!examquestions) { return res.send(404); }
    return res.json(examquestions);
  });
};

// Creates a new examquestions in the DB.
exports.create = function(req, res) {

	console.log('Reached here');
	console.log(req.body);
	console.log('Reached here1 ');
	var id = mongoose.Types.ObjectId();
	console.log('ID :'+id);
	
	

  var exam_question = new ExamQuestion({
    id: id,
    basicfact: req.body.basicfact,
	questiontype: req.body.questiontype,
	grade:req.body.grade,
	part:req.body.part,
	problem:req.body.problem,
	explanation: req.body.explanation,
    answer:req.body.answer,
	dependentquestion:req.body.dependentquestion
  });
  

  exam_question.save(function (err, exam_question) {
    if (err) { return next(err) }
    res.status(201).json(exam_question)
  });

  /*Examquestions.create(req.body, function(err, examquestions) {
    if(err) { return handleError(res, err); }
    return res.json(201, examquestions);
  });*/
};

// Updates an existing examquestions in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  ExamQuestion.findById(req.params.id, function (err, examquestions) {
    if (err) { return handleError(res, err); }
    if(!examquestions) { return res.send(404); }
    var updated = _.merge(examquestions, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, examquestions);
    });
  });
};

// Deletes a examquestions from the DB.
exports.destroy = function(req, res) {
  ExamQuestion.findById(req.params.id, function (err, examquestions) {
    if(err) { return handleError(res, err); }
    if(!examquestions) { return res.send(404); }
    examquestions.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}