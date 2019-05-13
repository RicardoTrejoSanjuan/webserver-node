const express = require('express');
const app = express();

const hbs = require('hbs');
// helpers
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'ricarDo trejO SANJUaN'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});


// app.get('/', (req, res) => {
//     let salida = {
//         nombre: 'Ricardo',
//         edad: 25,
//         url: req.url
//     };
//     res.send(salida);
// });

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});