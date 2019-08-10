
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 1, make: 'Ford', model: 'F-150', mileage: '123', trans: 'auto', title: 'clean'},
        {VIN: 2, make: 'Toyota', model: 'Tacoma', mileage: '44', trans: 'auto', title: 'lien'},
        {VIN: 3, make: 'Chevrolet', model: 'Silverado', mileage: '5', trans: 'auto', title: 'clean'},
      ]);
    });
};
