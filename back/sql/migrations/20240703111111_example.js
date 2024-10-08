/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) => {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS postgis;');
  const trx = await knex.transaction();
  try {
    await trx.schema.createTable('users', (table) => {
      table.increments('id').primary().notNullable();
      table.string('email', 100).nullable().unique().index();
      table.string('password', 100).nullable();
      table.string('role', 50).defaultTo('user').notNullable();
      table.string('name', 50).nullable();
      table.string('surname', 50).nullable();
      table.string('phone', 50).nullable();
      table.boolean('social_login').defaultTo(false).nullable();
      table.string('facebook_id').unique().nullable();
      table.string('google_id').unique().nullable();
      table.text('picture').nullable();
      table.string('activationlink', 255).nullable().index();
      table.boolean('isactivated').defaultTo(false).notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    });
    await trx.schema.createTable('tokens', (table) => {
      table.increments('id').primary().notNullable().unique();
      table.integer('user_id').notNullable().unique().index();
      table.text('refreshtoken').notNullable().index();
      table.timestamp('exp_token').notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    });

    await trx.schema.createTable('memories', (table) => {
      table.increments('id').primary().notNullable();
      table.string('title', 100).notNullable();
      table.string('address').nullable();
      table.specificType('location', 'geography(POINT, 4326)').nullable();
      table.string('formatted_address').nullable();
      table.timestamp('date_event').nullable();
      table.text('description').nullable();
      table.boolean('published').defaultTo(false).notNullable();
      table.integer('user_id').nullable();
      table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    });
    await trx.schema.createTable('memory_photos', (table) => {
      table.increments('id').primary().notNullable();
      table.integer('memory_id').notNullable();
      table.foreign('memory_id').references('memories.id').onDelete('CASCADE');
      table.string('url', 255).notNullable().unique();
      table.text('description').nullable();
      table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    });
    await knex.schema.createTable('favorite_memories', (table) => {
      table.increments('id').primary().notNullable();
      table
        .integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE');
      table
        .integer('memory_id')
        .notNullable()
        .references('id')
        .inTable('memories')
        .onDelete('CASCADE');
      table.unique(['user_id', 'memory_id']);
      table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    });
    await trx.schema.createTable('comments', (table) => {
      table.increments('id').primary().notNullable();
      table.text('text').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
      table.integer('memory_id').notNullable();
      table.foreign('memory_id').references('memories.id').onDelete('CASCADE');
      table.integer('user_id').notNullable();
      table.foreign('user_id').references('users.id').onDelete('CASCADE');
    });
    await trx.schema.createTable('panoramas', (table) => {
      table.increments('id').primary().notNullable();
      table.integer('user_id').notNullable();
      table.string('title', 100).nullable();
      table.text('description').nullable();
      table.string('address').nullable();
      table.timestamp('shooting_date').defaultTo(knex.fn.now()).notNullable();
      table.decimal('latitude', 9, 7).notNullable(); // Широта
      table.decimal('longitude', 9, 7).notNullable(); // Долгота
      table.string('view_mode', 10); // Режим вида (например: '3a')
      table.decimal('yaw', 5, 2); // Угол обзора камеры
      table.decimal('heading', 6, 2); // Направление камеры
      table.decimal('tilt', 5, 2); // Угол наклона камеры
      table.string('pano_id', 50); // Идентификатор панорамы
      table.text('thumbnail_url'); // URL миниатюры
      table.integer('image_width'); // Ширина изображения
      table.integer('image_height'); // Высота изображения
      table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    });
    await trx.commit();
  } catch (error) {
    console.error(error);
    await trx.rollback();
    throw Error('Failed migration');
  }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => {
  const trx = await knex.transaction();
  try {
    await trx.schema.dropTableIfExists('tokens');
    await trx.schema.dropTableIfExists('comments');
    await trx.schema.dropTableIfExists('favorite_memories');
    await trx.schema.dropTableIfExists('memory_photos');
    await trx.schema.dropTableIfExists('memories');
    await trx.schema.dropTableIfExists('panoramas');
    await trx.schema.dropTableIfExists('users');
    await trx.commit();
  } catch (error) {
    await trx.rollback();
    throw new Error(`Migration rollback failed: ${error.message}`);
  }
};
