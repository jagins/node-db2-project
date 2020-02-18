const database = require('../data/dbConfig');

function validateID(req, res, next)
{
    database('car-dealer').where({id: req.params.id}).first()
    .then(car =>
    {
        if(car)
        {
            req.car = car;
            next();
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
}

function validateCar(req, res, next)
{
    if(req.body.constructor === Object && Object.keys(req.body).length === 0)
    {
      res.status(400).json({message: 'missing car data'});
    }
    else if(!req.body.VIN || !req.body.MAKE || !req.body.MODEL || !req.body.MILEAGE)
    {
        res.status(400).json({message: 'VIN Number, MAKE, MODEL, and MILEAGE are required'});
    }
    else
    {
        next();
    }
}

module.exports = {validateID, validateCar};