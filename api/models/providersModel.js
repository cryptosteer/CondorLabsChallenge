'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var providersSchema = new Schema({
  firstName: {
    type: String,
    required: 'Kindly enter the name'
  },
  lastName: {
    type: String,
    required: 'Kindly enter the name'
  },
  middleName: {
    type: String,
    required: 'Kindly enter the name'
  },
  email: {
    type: String,
    required: 'Kindly enter the email'
  },
  specialty: {
    type: String,
    required: 'Kindly enter the specialty'
  },
  projectedStartDate: {
    type: Date,
    default: Date.now
  },
  employerId: {
    type: String
  },
  providerType: {
    type: String
  },
  staffStatus: {
    type: String
  },
  assignedTo: {
    type: String
  },
  status: {
    type: String
  },
  createdBy: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedBy: {
    type: String
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('providers', providersSchema);
