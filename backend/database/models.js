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
  userId: mongoose.Schema.Types.ObjectId,
  name: 'string',
  password: 'string',
  email: 'string'
}));

//  -- Student Schema
var Student = mongoose.model('Student', new mongoose.Schema({
  studentId: mongoose.Schema.Types.ObjectId,
  userId: mongoose.Schema.Types.ObjectId
}))

//  -- Teacher Schema
var Teacher = mongoose.model('Teacher', new mongoose.Schema({
  teacherId: mongoose.Schema.Types.ObjectId,
  userId: mongoose.Schema.Types.ObjectId
}))

//  -- Class Schema
var Class = mongoose.model('Class', new mongoose.Schema({
  classId: mongoose.Schema.Types.ObjectId,
  title: 'string',
  section: 'string',
  teacherId: mongoose.Schema.Types.ObjectId
}))

//  -- Post Schema
var Post = mongoose.model('Post', new mongoose.Schema({
  postId: mongoose.Schema.Types.ObjectId,
  content: 'string',
  timestamp : { type : Date, default: Date.now },
  authorId: mongoose.Schema.Types.ObjectId,
  classId: mongoose.Schema.Types.ObjectId,
}))











//	-- END
