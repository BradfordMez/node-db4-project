exports.up = async function (knex) {
  await knex.schema
    .createTable("recipes", (table) => {
      table.increments("recipe_id");
      table.string("recipe_name").notNullable().unique();
      table.dateTime("created_at");
    })
    .createTable("steps", (table) => {
      table.increments("step_id");
      table.integer("step_number").notNullable().unsigned();
      table.string("step_instructions").notNullable();
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes");
    })
    .createTable("ingredients", (table) => {
      table.increments("ingredient_id");
      table.string("ingredient_name").notNullable().unique();
    })
    .createTable("ingredient_quantity", (table) => {
      table.increments("quantity_id");
      table
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredient_id")
        .inTable("ingredients");
      table.decimal("quantity").unsigned().notNullable();
      table
        .integer("step_id")
        .unsigned()
        .notNullable()
        .references("step_id")
        .inTable("steps");
    });
};

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists("ingredient_quantity")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes");
};
