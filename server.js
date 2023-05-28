//Her henter jeg express modulet og gemmer det i variablen app
const express = require('express');
const app = express();
const tilmeldingRoutes = require('./router/tilmeldingRoutes');
const steavneRoutes = require('./router/steavneRouter');
const homepageRouter = require('./router/homePageRouter');
const adminRouter = require('./router/adminRouter');
const resultatRouter = require('./router/resultatRouter');
const setResultRouter = require('./router/setResultsRouter');

app.set('views', './view');
app.set('view engine', 'ejs');

//https://stackoverflow.com/questions/5710358/how-to-access-post-form-fields-in-express
var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

//Her fortæller jeg serveren at jeg bruger statiske filer, og de ligger i mappen public. Dette skal bruge til at forbinde css'en til siden.
app.use(express.static('public'));

//Her fortæller jeg serveren at der data sendes som json.
app.use(express.json());

app.use('/Tilmelding', tilmeldingRoutes);
app.use('/Staevne', steavneRoutes);
app.use('/Admin', adminRouter);
app.use('/Resultater', resultatRouter);
app.use('/setResults', setResultRouter);

app.get('/', homepageRouter);

const port = 3000;

app.listen(port, () => {
    console.log(`My first server is running on port ${port}`);
});
