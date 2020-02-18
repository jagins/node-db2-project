const express = require('express');
const database = require('../data/dbConfig');

const router = express.Router();

router.get('/', (req, res) =>
{
   database('car-dealer')
   .then(cars =>
    {
        res.status(200).json(cars);
    })
   .catch(error =>
    {
        res.status(500).json({error: `Couldn't retrieve Cars from the database`});
    })
})

router.get('/:id', (req, res) =>
{
    database('car-dealer').where({id: req.params.id}).first()
    .then(car =>
    {
        if(car)
        {
            res.status(200).json(car);
        }
        else
        {
            res.status(404).json({message: 'The Car with that ID does not exist'});
        }
    })
    .catch(error =>
    {
        res.status(500).json({error: `Couldn't retrieve Cars from the database`});
    })
})

module.exports = router;