'use strict';

var _ = require('lodash');
var Contactus = require('./contactus.model');

// Get list of contactuss
exports.index = function(req, res) {
  Contactus.find(function (err, contactuss) {
    if(err) { return handleError(res, err); }
    return res.json(200, contactuss);
  });
};

// Get a single contactus
exports.show = function(req, res) {
  Contactus.findById(req.params.id, function (err, contactus) {
    if(err) { return handleError(res, err); }
    if(!contactus) { return res.send(404); }
    return res.json(contactus);
  });
};

// Creates a new contactus in the DB.
exports.create = function(req, res) {

	//login(' user :'+$scope.user);

	 var contactus = new Contactus({
    firstname: req.body.firstname,
	lastname: req.body.lastname,
	username:req.body.username,
	emailid:req.body.emailid,
	remarks:req.body.remarks
  });
  
  contactus.save(function (err, contactus) {
    if (err) { return next(err) }
    res.status(201).json(contactus)
  });

/*  Contactus.create(req.body, function(err, contactus) {
    if(err) { return handleError(res, err); }
    return res.json(201, contactus);
  }); */
};

// Updates an existing contactus in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Contactus.findById(req.params.id, function (err, contactus) {
    if (err) { return handleError(res, err); }
    if(!contactus) { return res.send(404); }
    var updated = _.merge(contactus, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, contactus);
    });
  });
};

// Deletes a contactus from the DB.
exports.destroy = function(req, res) {
  Contactus.findById(req.params.id, function (err, contactus) {
    if(err) { return handleError(res, err); }
    if(!contactus) { return res.send(404); }
    contactus.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}