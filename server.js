const express  = require('express');
const app      = express();
const mongoose = require('mongoose');
const port     = process.env.PORT || 3000;
const path     = require('path');

app.listen(port, (err) => {
    if (err) {
        console.log('Server could not start on port: ' + port)
    } else {
        console.log('Server successfully started on port: ' + port)
    }
});

// Setting the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Migrant Med | Home',
        header: 'Migrant Med',
    });
});

// Add route
app.get('/clients/add', (req, res) => {
    let clients = [
        {
            id:1,
            name: 'Perry Craft',
            phone: '4704290290'
        },

        {
            id:2,
            name: 'Leon Craft',
            phone: '7703302938'
        }
    ];
    res.render('add_client', {
        title: 'Migrant Med | Sign-up',
        header: 'Thank you for signing up with Migrant Med today!',

    });
});

// Registered route
app.get('/clients/registered', (req, res) => {
    let clients = [
        {
            id:1,
            name: 'Perry Craft',
            phone: '4704290290'
        },

        {
            id:2,
            name: 'Leon Craft',
            phone: '7703302938'
        }
    ];
    res.render('registered', {
        title: 'Migrant Med | Registry',
        header: 'Registered Clients',
        clients: clients
    });
});