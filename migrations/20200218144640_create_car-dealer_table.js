
exports.up = function(knex) {
  return knex.schema.createTable('car-dealer', table =>
  {
      table.increments();
      table.string('VIN').notNullable();
      table.string('MAKE').notNullable();
      table.string('MODEL').notNullable();
      table.integer('MILEAGE').notNullable();
      table.string('TRANSMISSION');
      table.string('STATUS');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('car-dealer');
};
