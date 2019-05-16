const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);


// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({Origin: 'http://localhost:4200'}));


// Routes
let apiRoutes = require('./routes/rating.route');
app.use('/api/ratings', apiRoutes);

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
});

// Send message for default URL
app.get('/', (req, res) => res.send('API It\'s Working'));
