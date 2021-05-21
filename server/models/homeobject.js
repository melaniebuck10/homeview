'use strict';

const mongoose = require('mongoose');

const homeobjectSchema = new mongoose.Schema(
  {
    street: {
      type: String,
      trim: true,
      required: true
    }, 
    city: {
        type: [String],
        required: true
      },
    region: {
        type: [String],
        required: true
    },
    plz: {
        type: [Number],
        required: true
    },
    landlord: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    typeOfObject: {
      type: String,
      enum: ['apartment', 'house', 'studio', 'villa']
    },
    amountOfRooms: {
        type: String,
        enum: ['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6', '6.5', 'more_than_six' ]
    },
    location: {
      coordinates: [
        {
          type: Number,
          min: -180,
          max: 180
        }
      ],
      type: {
        type: String,
        default: 'Point'
      }
    },
    description: {
      type: String,
      required: true
    },
    renovations: {
        type: String,
        required: true
      },
    price: {
      type: Number,
      required: true
    },
    pictures: {
      type: [String]
    },
    petsAllowed: {
        type: Boolean
    },
    status: {
      type: String,
      enum: ['available', 'in_process', 'rented']
    }
  },
  {
    timestamps: {
      createdAt: 'addedDate',
      updatedAt: 'editDate'
    }
  }
);

module.exports = mongoose.model('Homeobject', homeobjectSchema);
