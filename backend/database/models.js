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

//  -- Message Schema
const MessageSchema = new mongoose.Schema({
  messageId: mongoose.Schema.Types.ObjectId,
  timestamp : { type : Date, default: Date.now },
  content: 'string',
  sender: 'string',
}, {collection: 'message'});
var Message = mongoose.model('Message', MessageSchema);

//  -- Post Schema
const PostSchema = new mongoose.Schema({
  postId: mongoose.Schema.Types.ObjectId,
  content: 'string',
  timestamp : { type : Date, default: Date.now },
  author: 'string',
}, {collection: 'post'});
var Post = mongoose.model('Post', PostSchema);

//  -- User Schema
const UserSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  name: 'string',
  password: 'string',
  email: 'string',
  userType: 'string',
  inbox: MessageSchema,
}, {collection: 'user'});
var User = mongoose.model('User', UserSchema);

//  -- Class Schema
const ClassSchema = new mongoose.Schema({
  classId: mongoose.Schema.Types.ObjectId,
  title: 'string',
  section: 'string',
  teacherId: UserSchema,
  post: PostSchema
}, {collection: 'class'});
var Class = mongoose.model('Class', ClassSchema);

module.exports = {
  User,
  Class,
  Message,
  Post,
}







//	-- END
