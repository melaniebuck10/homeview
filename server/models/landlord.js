'use strict';

const mongoose = require('mongoose');
const User = require('./user');

const landlordSchema = new mongoose.Schema({
  address: {
    type: String
  },
  phoneNumber: {
    type: String
  }
});

const Landlord = User.discriminator('landlord', landlordSchema);

module.exports = Landlord;
