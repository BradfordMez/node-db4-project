exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredient_quantity")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("ingredient_quantity").insert([
        { quantity_id: 1, ingredient_id: "0", quantity: "1", step_id: "1" },
        { quantity_id: 2, ingredient_id: "1", quantity: "10", step_id: "2" },
        { quantity_id: 3, ingredient_id: "2", quantity: "1", step_id: "3" },
        { quantity_id: 4, ingredient_id: "3", quantity: "1", step_id: "4" },
        { quantity_id: 5, ingredient_id: "4", quantity: "1", step_id: "5" },
      ]);
    });
};
