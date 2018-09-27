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
  name: 'string',
  password: 'string',
  email: 'string'
}));










//	-- END
