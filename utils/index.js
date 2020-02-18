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

module.exports = {validateCar};