const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const app = express();

const { mongoose } = require('./server/database');

// Settings
app.set('port', process.env.PORT || 3000);


// Middlewares
//app.use(morgan('dev'));
app.use(express.json());
//app.use(cors({Origin: '*'}));
app.use(express.static(path.join(__dirname, 'dist/frontend')));


// Routes
let apiRoutes = require('./server/routes/rating.route');
app.use('/api/ratings', apiRoutes);

// Starting the server
app.listen(app.get('port'), () => {
  console.log('Server on port: ', app.get('port'));
});

// Send message for default URL
//app.get('/', (req, res) => res.send('API It\'s Working'));

// Catch all other routes request and return it to the index
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'dist/frontend/index.html')));
