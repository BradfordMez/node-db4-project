exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          recipe_id: 1,
          recipe_name: "Spaghetti",
          created_at: "2021-08-01 08:23:19.100",
        },
        {
          recipe_id: 2,
          recipe_name: "Buffalo Chicken Sliders",
          created_at: "2021-11-01 09:42:20.125",
        },
        {
          recipe_id: 3,
          recipe_name: "A Mean Bowl of Cereal",
          created_at: "2021-01-05 08:50:33.121",
        },
      ]);
    });
};
