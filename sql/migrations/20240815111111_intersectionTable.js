/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) => {
  try {
    await knex.schema.createTable('targets', function (table) {
      table.increments('id').primary().notNullable();
      table
        .integer('memory_id')
        .notNullable()
        .references('id')
        .inTable('memories')
        .onDelete('CASCADE');
      table
        .integer('another_memory_id')
        .nullable()
        .references('id')
        .inTable('memories')
        .onDelete('CASCADE');
      table.integer('azimuth_degrees').notNullable();
      table.integer('distance').notNullable();
      table.text('type').defaultTo('unknown').notNullable();
      table.integer('frequency').nullable();
      table.text('description').nullable();
      table
        .integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE');
      table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    });
    await knex.schema.createTable('intersections', function (table) {
      table.increments('id').primary().notNullable();
      table.specificType('location', 'geography(POINT, 4326)').notNullable();
      table.integer('frequency').nullable();
      table.text('type').defaultTo('unknown').notNullable();
      table
        .integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE');
      table.integer('distance').notNullable();
      table
        .integer('first_memory_id')
        .notNullable()
        .references('id')
        .inTable('memories')
        .onDelete('CASCADE');
      table
        .integer('second_memory_id')
        .notNullable()
        .references('id')
        .inTable('memories')
        .onDelete('CASCADE');
      table.text('description').nullable();
      table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    });
  } catch (error) {
    throw new Error(
      `Migration of create intersection tables  failed: ${error.message}`,
    );
  }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => {
  await knex.schema.dropTableIfExists('targets');
  await knex.schema.dropTableIfExists('intersections');
};
