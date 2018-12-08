const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const settings = require('./settings');
const { db, github, jwt, api } = require('wildhub-backend');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const buildDir = path.resolve(__dirname, '../front/build');
app.use(express.static(buildDir));

db.setup(settings.mysql);
github.setup(settings.github);
jwt.setup(settings.jwtSecret);

app.use(morgan('dev'));
app.use('/api', api);

app.get('*', (req, res) => res.sendFile(`${buildDir}/index.html`));

app.listen(process.env.PORT || 5000);
