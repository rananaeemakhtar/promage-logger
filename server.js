const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');

const connectDB = require('./config/db');
const router = express.Router();
const app = express();

connectDB();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(bodyParser.json())

app.use(cors());

app.use('/api/log', require('./routes/log'));

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
