exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_id: 0, ingredient_name: "etc." },
        { ingredient_id: 1, ingredient_name: "Noodles" },
        { ingredient_id: 2, ingredient_name: "Tomato Sauce" },
        { ingredient_id: 3, ingredient_name: "Cheerios" },
        { ingredient_id: 4, ingredient_name: "Milk" },
        { ingredient_id: 5, ingredient_name: "Ranch" },
        { ingredient_id: 6, ingredient_name: "Chicken" },
        { ingredient_id: 7, ingredient_name: "Louisiana Hot-Sauce" },
      ]);
    });
};
