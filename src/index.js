const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
const oracldb =require('oracledb');
oracldb.fetchAsString = [ oracldb.CLOB ];
var bodyParser = require('body-parser');
var ActiveDirectory = require('activedirectory2');
//var _ = require('underscore');
const { autenticarUsuario } = require('./controllers/autenticarUsuarioControllers');
var query = 'ou=*Exchange*';
/*Nuevo*/
const { Router } = require('express');

var opts = {
    includeMembership : [ 'all' ],
    includeDeleted : false
};

//Definimos el puerto

app.set('port',process.env.PORT||5000);

//Definimos los MIDDLEWARE
app.use(bodyParser.json({limit: "1000mb", parameterLimit: 10000000000000000000000000000000000}))
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:false}));

//Routes

app.use('/api',require('./routes/indexRoutes'))



app.post('/directorioActivo', async (req, res) => {

    const  cCodUsr  = req.body.user
    const cpasswor = req.body.password
   // console.log(cCodUsr +  cpasswor)
 
   var config = {
     url: 'ldap://10.110.0.18:389',
       baseDN: 'dc=spiramide,dc=local',
    // baseDN: `cn=${cCodUsr} dc=spiramide, dc=local`,
     ///baseDN: 'ou=Users, dc=spiramide, dc=local',
      username:cCodUsr,
      password:cpasswor
 };
 
    var ad = new ActiveDirectory(config);
    var username =  cCodUsr;//'intrasp';
    var password = cpasswor //'Piramide7070*';
    // Authenticate
    ad.authenticate(username, password, function (err, auth) {
     if (auth) {
 
         console.log('Usuario Autenticado');
          res.send('Usuario Autenticado');
         
       
    
     } else {
         console.log('Usuario no autenticado');
         res.send('Usuario no autenticado');
     }
 });  
   
});



//Servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get ('port')}`);
});


