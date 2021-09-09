exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("steps").insert([
        {
          step_id: 1,
          step_number: "1",
          step_instructions: "Fill pot with water",
          recipe_id: "1",
        },
        {
          step_id: 2,
          step_number: "2",
          step_instructions: "Once pots hot, dump the noddles in",
          recipe_id: "1",
        },
        {
          step_id: 3,
          step_number: "3",
          step_instructions: "drain out the water and add sauce",
          recipe_id: "1",
        },
        {
          step_id: 4,
          step_number: "1",
          step_instructions: "pour cereal in a bowl",
          recipe_id: "3",
        },
        {
          step_id: 5,
          step_number: "2",
          step_instructions: "pour milk in that same bowl",
          recipe_id: "3",
        },
      ]);
    });
};
