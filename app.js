const path = require('path');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const cors = require('cors');

const user = require('./model/user');
// Enable CORS for all routes
app.use(cors());

// ... rest of your server code

app.use(express.urlencoded({ extended: true })); 

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views');
// Middleware for parsing JSON in the request body
app.use(express.json());

const errorController = require('./controllers/error');
const userRoutes = require('./route/user');
app.use(userRoutes);







//const shopRoutes = require('./routes/shop');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

//app.use('/admin', adminRoutes);


//app.use(errorController.get404);


sequelize
  .sync()
  .then(result => {
    // console.log(result);
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
