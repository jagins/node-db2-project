exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('car-dealer').truncate()
    .then(function () {
      const cars = [
        {
          VIN: '2C3KA43R18H307695',
          MAKE: 'Nissan',
          MODEL: 'Versa',
          MILEAGE: 44657
        },
        {
          VIN: '3D7KS28C86G135007',
          MAKE: 'Hyundai',
          MODEL: 'Sonata',
          MILEAGE: 87805
        },
        {
          VIN: '1J8FT57W07D105500',
          MAKE: 'Volkswagon',
          MODEL: 'Passat',
          MILEAGE: 79749
        },
        {
          VIN: '1J8FT57W07D105500',
          MAKE: 'Volkswagon',
          MODEL: 'Passat',
          MILEAGE: 79749

        },
        {
          VIN: '5FNYF3H53CB043076',
          MAKE: 'Toyota',
          MODEL: 'Yaris',
          MILEAGE: 41838,
          TRANSMISSION: '4 speed automatic',
          STATUS: 'clean'
        },
        {
          VIN: '2G2FS22S8S2216599',
          MAKE: 'Porche',
          MODEL: '911 Targa',
          MILEAGE: 67104,
          TRANSMISSION: '7 speed automatic',
          STATUS: 'salvage'
        },
      ];

      return knex('car-dealer').insert(cars);
    });
    
};
