'use strict';

var mongoose = require('mongoose'),
  Providers = mongoose.model('providers');

exports.list_all_providers = function(req, res) {
  Providers.find({}, function(err, provider) {
    if (err)
      res.send(err);
    res.json(provider);
  });
};

exports.create_a_provider = function(req, res) {
  var new_provider = new Providers(req.body);
  new_provider.save(function(err, provider) {
    if (err)
      res.send(err);
    res.json(provider);
  });
};

exports.read_a_provider = function(req, res) {
  Providers.findById(req.params.providerId, function(err, provider) {
    if (err)
      res.send(err);
    res.json(provider);
  });
};

exports.update_a_provider = function(req, res) {
  Providers.findOneAndUpdate({_id: req.params.providerId}, req.body, {new: true}, function(err, provider) {
    if (err)
      res.send(err);
    res.json(provider);
  });
};

exports.delete_a_provider = function(req, res) {
  Providers.remove({
    _id: req.params.providerId
  }, function(err, provider) {
    if (err)
      res.send(err);
    res.json({ message: 'Provider successfully deleted' });
  });
};
