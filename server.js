const express = require( 'express' );
const app = express();
const session = require('express-session');
const flash = require('express-flash');
const { ApiNameRouter } = require( './server/routes/apiNameRouter' );

require( './server/config/database' );

app.set('views', __dirname + '/client/views'); 
app.set('view engine', 'ejs');
app.use(flash());

app.use( express.urlencoded({ extended: true }) );
app.use(express.json());

app.use( '/', ApiNameRouter );



app.listen(7077, function() {
    console.log("running on port 7077");
});