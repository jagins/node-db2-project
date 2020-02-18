const express = require('express');
const database = require('../data/dbConfig');
const {validateID, validateCar} = require('../utils');
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

router.get('/:id', validateID, (req, res) =>
{
   res.status(200).json(req.car);
})

router.post('/', validateCar, (req, res) =>
{
    const addCar = {
        VIN: req.body.VIN,
        MAKE: req.body.MAKE,
        MODEL: req.body.MODEL,
        MILEAGE: req.body.MILEAGE,
        TRANSMISSION: req.body.TRANSMISSION ? req.body.TRANSMISSION : null,
        STATUS: req.body.STATUS ? req.body.STATUS : null
    };

    database('car-dealer').insert(addCar, 'id')
    .then(newId =>
    {
        database('car-dealer').where({id: newId[0]}).first()
        .then(car =>
        {
            res.status(201).json(car);
        })
        .catch(error =>
        {
            res.status(500).json({error: 'Could not retrieve Cars from the database'});
        })
    })
    .catch(error =>
    {
        res.status(500).json({error: 'Error saving new Car to the database'});
    })
})

module.exports = router;