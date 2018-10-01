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
const db = require(__dirname + "/../database/mongodb");
const models = require(__dirname + "/../database/models");

exports.home = (req, res, next) => {

	function start() {
    return res.status(200).send("Exercise 06: Moodle (by Andric Quinn S. Baticos)");
	}

	start();

}

exports.saveStudent = (req, res, next) => {

	/******************************************
  *          VARIABLE DECLARATIONS          *
  ******************************************/
	var name = req.body.name;

	/******************************
  *          FUNCTIONS          *
  ******************************/
	function start() {
    if (typeof req.body==='undefined') {
      return res.status(500).send("[ERROR 400] Cannot find message body.")
		} else {
			req.body.userType = 'S';	// set userType to 'S'tudent
			const user = new models.User(req.body);
			user.save((error) => {
					if (error) { return res.status(500).send('Error saving student!'); }
					else { return res.status(200).send('[200] Successfully saved ' + name + ' into the database!'); }
			})
    }
  }
  start();

}

exports.saveTeacher = (req, res, next) => {

	/******************************************
  *          VARIABLE DECLARATIONS          *
  ******************************************/
	var name = req.body.name;

	/******************************
  *          FUNCTIONS          *
  ******************************/
	function start() {
    if (typeof req.body==='undefined') {
      return res.status(500).send("[ERROR 400] Cannot find message body.")
		} else {
			req.body.userType = 'T';	// set userType to 'T'eacher
			const user = new models.User(req.body);
			user.save((error) => {
					if (error) { return res.status(500).send('Error saving teacher!'); }
					else { return res.status(200).send('[200] Successfully saved ' + name + ' into the database!'); }
			})
    }
  }
  start();

}


//	-- END
