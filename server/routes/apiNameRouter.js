const express = require( 'express' );
const ApiNameRouter = express.Router();
const { ApiNamesController } = require( '../controllers/apiNamesController' );

ApiNameRouter
    .get( '/', ApiNamesController.retrieveAllNames );

ApiNameRouter
    .get( '/new/:name', ApiNamesController.addName );


ApiNameRouter
    .get( '/remove/:name', ApiNamesController.deleteName );
/*
ApiNameRouter
    .get( '/:name', ApiNamesController.retrieveName );
*/

module.exports = { ApiNameRouter };