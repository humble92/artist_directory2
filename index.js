let express = require('express')
let app = express();
let bodyParser = require('body-parser');
let path = require('path');
let db = require('./util/database');
let session = require('express-session');

app.use(session({
  secret :'HaVeAgOOdDaY',
  resave:false,
  saveUninitialized:true
}));
  

const expressHbs = require('express-handlebars');
app.engine(
    'hbs',
    expressHbs({
      layoutsDir: 'views/layouts/',
      defaultLayout: 'main-layout',
      extname: 'hbs'
    })
  );
  app.set('view engine', 'hbs');
  app.set('views', 'views');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) // middleware

// parse application/json
app.use(bodyParser.json()) // middleware

let artistRoutes = require('./routes/artist');

app.use(express.static(path.join(__dirname,'public')));

app.get('/', function (req,res) {
  res.redirect(301, '/login');
});

app.use(artistRoutes);

app.listen(process.env.PORT || 3000);



