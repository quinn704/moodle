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
const express = require('express');                     // web framework for node
const port = process.env.PORT || 3000;                  // port used to run the program
const router = require(__dirname + '/routes/router');   // methods available for the application

let app;
let handler;
let start;

start = () => {

  if (handler) {
    handler.close();
  }

  //  creation of express application
  app = express();

  //  setting the environment for express
  app.set('case sensitive routing', true);
  app.disable('x-powered-by');

  router(app);
  return app.listen(port, () => {
    console.log(`[SUCCESS] Server started. Listening on port ${port}`);
  });

}

handler = start();

module.exports = {
  handler
}
