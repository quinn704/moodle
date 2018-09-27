/**************************************************************************************************
*                                                                                                 *
*     Computer Science 100 Exercise: Moodle                                                       *
*                                                                                                 *
*     PURPOSE                                                                                     *
*                                                                                                 *
*     USAGE                                                                                       *
*                                                                                                 *
*     SUBROUTINES AND FUNCTION SUBPROGRAMS REQUIRED                                               *
*                                                                                                 *
*     METHOD                                                                                      *
*                                                                                                 *
*     PROGRAMMER                                                                                  *
*     Andric Quinn Baticos                                                                        *
*                                                                                                 *
*     DATE-WRITTEN                                                                                *
*     September 2018                                                                              *
*                                                                                                 *
**************************************************************************************************/
'use strict';
const mongoose  = require('mongoose');

//  -- User Schema
var User = mongoose.model('User', new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: 'string',
  password: 'string',
  email: 'string'
}));

//  -- Student Schema
var Student = mongoose.model('Student', new mongoose.Schema({
  host: mongoose.Schema.Types.ObjectId
}))

//  -- Teacher Schema
var Teacher = mongoose.model('Teacher', new mongoose.Schema({
  host: mongoose.Schema.Types.ObjectId
}))












//	-- END
