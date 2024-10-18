const express = require('express');
const cors = require('cors');
const config = require('./config');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

// Use routes
app.use('/api', routes);

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Basic error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});
