const {ApiNameModel} = require( '../models/apiNameModel' );

const ApiNamesController = {
    retrieveAllNames : function( request, response ){
        ApiNameModel.getApiName()
            .then( names =>{
                let infoPeople = names.map( name =>{
                    return {
                        name : name.name,
                        birthdayYear : name.birthdayYear
                    }
                })
                response.status( 200 ).json( infoPeople );
            });
    },

    addName : function( request, response ){
        let name = request.params.name;

        if( name ){
            let newName = {
                name,
            };
            ApiNameModel
                .createApiName( newName )
                .then ( result => {
                    response.status( 201 ).json( result );
                });
        }
        else{
            response.statusMessage = "You are missing a field ( 'firstName', 'lastName', 'birthday' )";
            response.status( 406 ).end();
        }
    },

    deleteName : function( request, response ){
        let userName = request.params.name;

        ApiNameModel
            .getApiNameById( userName )
            .then( user => {
                if( user === null ){
                    throw new Error( "That name doesn't exist" );
                }
                else{
                    ApiNameModel
                        .destroy( userName )
                        .then( result => {
                            response.status( 204 ).end();
                        });
                }
            })
            .catch( error => {
                response.statusMessage = error.message;
                response.status( 404 ).end();
            })

    }

}

module.exports = {ApiNamesController};