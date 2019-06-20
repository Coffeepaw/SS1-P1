const express = require('express')
const app = express()
const api_helper = require('./API_helper')
var request = require('request');
var body_parser = require('body-parser')
const HOST = process.env.HOST || "172.17.0.4"
const port =  process.env.PORT || 3000
const ip = process.env.IP || "172.17.0.3"
const p = 3001
var rp = require('request-promise');

app.use(body_parser.urlencoded({extended:true}));

bodyParser = require('body-parser').json();
var formulario = '<form method="post" action= "/insertar">'
    + '<label for="dpi">DPI</label>'
    + '<input type="text" name="dpi" id="dpi">' 
    + '<label for="carnet">Carnet</label>'
    + '<input type="text" name="carnet" id="carnet">' 
    + '<label for="nombre">Nombre</label>'
    + '<input type="text" name="nombre" id="nombre">' 
    + '<label for="apellido">Apellido</label>'
    + '<input type="text" name="apellido" id="apellido">'    
    + '<label for="email">Correo</label>'
    + '<input type="text" name="email" id="email">'  
    + '<label for="telefono">Telefono</label>'
    + '<input type="text" name="telefono" id="telefono">'  
    + '<input type="submit" value="Enviar"/>'
    + '</form>';

var cabecera = '<h1>Insertar Alumno</h1>';

app.get('/insertar', function (req, res) {
    res.send('<html><body>'
            + cabecera
            + formulario
            + '</html></body>'
    );
});

app.post('/insertar', function (req, res) {
 
    var dpi = req.body.dpi || '';
    var carnet = req.body.carnet || '';
    var nombre = req.body.nombre || '';
    var apellido = req.body.apellido || '';
    var email = req.body.email || '';
    var telefono = req.body.telefono || ''; 

    var requestData ={
    	"carnet":carnet,
    	"dpi":dpi,
    	"nombre":nombre,
    	"apellido":apellido,
    	"email":email,
    	"telefono":telefono
    };
    var ruta = 'http://'+ip+':'+port+'/insertAlumno';

    request.post(ruta, {
	  json: requestData
	}, (error, res, body) => {
	  if (error) {
	    console.log('Error')
	    return
	  }
	  console.log(`statusCode: ${res.statusCode}`);
	  console.log(body);
	})

});

app.get('/', function (req, res) {
      	res.send('<p><a href="/insertar">Insertar un Alumno</a></p>'
      			+'<a href="/viewAlumno">Ver Alumnos</a>'
    );
})

app.get('/viewAlumno', function (req, res) {

	var ruta = 'http://'+ip+':'+port+'/viewAlumno';
	api_helper.make_API_call(ruta)
    .then(response => {
    	//console.log(response);
        res.json(response);
    })
    .catch(error => {
        res.send(error)
    })


})


app.listen(p, HOST)

console.log(`Running on http://${HOST}:${p}`);
