// creating table
exports.up = function(knex) {
    return knex.schema.createTable('tasks', function(table) {
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.boolean('is_complete').notNullable();
        table.integer('user_id');
        console.log("created")
  
      })
}
  
exports.down = function(knex) {
    return knex.schema.dropTable('tasks');
  
};


// for removing column (run command -knex migrate:make remove_is_complete_from_tasks ,then knex migrate:latest)

exports.up = function(knex, Promise) {
    return knex.schema.table('tasks', function(t) {
        t.dropColumn('is_complete');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('tasks', function(t) {
        t.enum('is_complete', ['apparel', 'electronics', 'furniture']).notNull();
    });
};


// add column(run command-knex migrate:make add_quantity_to_tasks ,then knex migrate:latest)

exports.up = function(knex, Promise) {
    return knex.schema.table('tasks', function(t) {
        t.integer('quantity').notNull().defaultTo(0);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('tasks', function(t) {
        t.dropColumn('quantity');
    });
};
