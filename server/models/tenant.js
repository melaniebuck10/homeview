'use strict';

const mongoose = require('mongoose');
const User = require('./user');

const tenantSchema = new mongoose.Schema({
  description: {
    type: String
  },
  rating: {
    type: Number
  },
  pets: {
    type: Boolean
  },
  musician: {
    type: Boolean
  }
});

const Tenant = User.discriminator('tenant', tenantSchema);

module.exports = Tenant;
