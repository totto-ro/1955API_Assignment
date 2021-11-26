const mongoose = require( 'mongoose' );

const ApiNameSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    }
    
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const ApiName = mongoose.model( 'api_names', ApiNameSchema );

const ApiNameModel = {
    createApiName : function( newApiName ){
        return ApiName.create( newApiName );
    },
    getApiName : function( ){
        return ApiName.find().sort( { created_at: -1 } );
    },
    getApiNameById : function( name ){
        return ApiName.findOne( { name } );
    },
    updateInfo : function( id, newApiName ){
        return ApiName.updateOne( { _id : id }, newApiName );
    },
    destroy : function( name ){
        return ApiName.deleteOne({ name });
    }
};

module.exports = {ApiNameModel};