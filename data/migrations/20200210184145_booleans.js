exports.up = function(knex) {
  return knex.schema
    .table("projects", tbl => {
      tbl.boolean("completed").defaultTo(0);
    })
    .table("tasks", tbl => {
      tbl.boolean("completed").defaultTo(0);
    });
};

exports.down = function(knex) {
  return knex.schema
    .table("projects", tbl => {
      tbl.dropColumn("completed");
    })
    .table("tasks", tbl => {
      tbl.dropColumn("completed");
    });
};
