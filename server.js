const express  = require('express');
const app      = express();
const mongoose = require('mongoose');
const port     = process.env.PORT || 3000;
const path     = require('path');
const bodyParser = require('body-parser');

// Bringing in client model
let Client = require('./models/client');


// Mongoose setup //
mongoose.connect('mongodb://localhost:27017/Migrant_Clients');
let db = mongoose.connection;

// Check for db  connection
db.on('connected',  () => {
    console.log('Connected to Mongo Database');
});

// Check for db errors
db.on('error', (err) => {
    console.log('Error could not connect to Mongo Database ' + err)
});


// Port configuration
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

// Body parser middleware //
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Set public folder to static
app.use(express.static(path.join(__dirname, 'public')));

// Home page
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

// Client submit POST route
app.post('/clients/add', (req, res) => {
    let client = new Client();
    client.name = req.body.name;
    client.phone = req.body.phone;
    client.address = req.body.address;
    client.address2 = req.body.address2;
    client.state = req.body.state;
    client.city = req.body.city;
    client.zip = req.body.zip;
    client.yoe = req.body.yoe;
    client.specialty = req.body.specialty;
    client.save( (err) => {
        if (err) {
            console.log('Warning client not saved ' + err);
            return
        } else {
            res.redirect('/');
        }
    });
});

// Registered route
app.get('/clients/registered', (req, res) => {
    Client.find({}, (err, clients) => {
        if (err) {
            console.log(err);
        } else {
            res.render('registered', {
                title: 'Migrant Med | Registry',
                header: 'Registered Clients',
                clients: clients
            });
        }
    });
});