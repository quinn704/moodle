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
const UserSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  name: 'string',
  password: 'string',
  email: 'string'
}); var User = mongoose.model('User', UserSchema);

//  -- Student Schema
const StudentSchema = new mongoose.Schema({
  studentId: mongoose.Schema.Types.ObjectId,
  userId: UserSchema
}); var Student = mongoose.model('Student', StudentSchema);

//  -- Teacher Schema
const TeacherSchema = new mongoose.Schema({
  teacherId: mongoose.Schema.Types.ObjectId,
  userId: UserSchema
}); var Teacher = mongoose.model('Teacher', TeacherSchema);

//  -- Class Schema
const ClassSchema = new mongoose.Schema({
  classId: mongoose.Schema.Types.ObjectId,
  title: 'string',
  section: 'string',
  teacherId: TeacherSchema
}); var Class = mongoose.model('Class', ClassSchema);

//  -- Inbox Schema
const InboxSchema = new mongoose.Schema({
  inboxId: mongoose.Schema.Types.ObjectId,
  userId: UserSchema
}); var Inbox = mongoose.model('Inbox', InboxSchema);

//  -- Message Schema
const MessageSchema = new mongoose.Schema({
  messageId: mongoose.Schema.Types.ObjectId,
  timestamp : { type : Date, default: Date.now },
  content: 'string',
  senderId: UserSchema,
  inboxId: mongoose.Schema.Types.ObjectId
}); var Message = mongoose.model('Message', MessageSchema);

//  -- Post Schema
const PostSchema = new mongoose.Schema({
  postId: mongoose.Schema.Types.ObjectId,
  content: 'string',
  timestamp : { type : Date, default: Date.now },
  authorId: UserSchema,
  classId: ClassSchema
}); var Post = mongoose.model('Post', PostSchema);









//	-- END
