const express = require('express');

const helmet = require('helmet');

const carRouter = require('./cars/carRouter');

const server = express();

server.use(helmet());

server.use(express.json());

server.use('/api/cars', carRouter);

server.get('/', (req, res) =>
{
    res.json({message: 'API is running'});
})

const PORT = 5000;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));