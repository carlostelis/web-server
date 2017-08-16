const express = require('express');
var app = express();
const puerto = 3000;

// middleware define una función para ser ejecutada al llamar cualquier ruta del sitio desde el navegador, o en las que sea directamente especificado
const middleware = require('./middleware.js');


// Es importante poner el middleware antes de la app, de lo contrario no se ejecutará
//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

// app.get('/', function(req, res) {
//     res.send(`Hello express`);
// });

// Al ponerlo en medio de un get(), se especifica solo para esa ruta
app.get('/about', middleware.requireAuthentication, function(req, res) {
    res.send(`About us`);
});

// Para despligue de la página por defecto
app.use(express.static(__dirname + '/public'));

app.listen(puerto, function() {
    console.log(`Servidor escuchando el puerto ${puerto}`);
});
