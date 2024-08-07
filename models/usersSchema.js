const mongoose = require('mongoose');
const bcrypt = require("bcrypt")
const { Schema } = mongoose;

const userSchema = new Schema({

  firstname: {
    type: String,
    unique: true,
    required: true
  },
  lastname: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true
  },
  
  password: {
    type: String,
    unique: true,
    required: true,
    minLength: 6,
    maxLength: 200
  },
  avatar: {
    type: String, 
    default: ""
  },
role: { type: String,
  enum: ['tenant', 'landlord', 'Landlord'],
   default: "User",
 },
 phoneNumber: {
    type: String,
    unique: true,
    required: true,
    minLength: 11,
    maxLength: 11
  },
 isVerified: {
  type: Boolean,
  default: false
},
emailToken: {
  type: String,
},
},
{ timestamps: true }
);




const User = mongoose.model('User', userSchema);

module.exports = User;





  




 

