const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
compression = require('compression');
const corsOptions = require('./services/cors');
const router = require('./routes/router');

const app = express();

app.use(helmet());
app.use(morgan('combined'));
app.use(cors(corsOptions));
app.use(compression());

app.use(express.json());

app.use('/v1', router);

module.exports = app;
