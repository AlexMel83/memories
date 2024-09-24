/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const panoramasData = [
  {
    user_id: 1,
    title: 'Замок князей Острожских',
    shooting_date: new Date('2021-01-01T00:00:00Z'),
    latitude: 49.7580948,
    longitude: 27.2269745,
    view_mode: '3a',
    yaw: 75.0,
    heading: 358.87,
    tilt: 29.41,
    pano_id: 'AF1QipMgKJQij3F9ZA2UvEMHioycdcGRFiIpP-u52KUw',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipMgKJQij3F9ZA2UvEMHioycdcGRFiIpP-u52KUw=w900-h600-k-no-pi60.589360822443-ya358.86659990277525-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
];

export const seed = async (knex) => {
  const seedExist = await knex('panoramas').select('*').where({ id: 1 });

  if (!seedExist[0]) {
    const trx = await knex.transaction();

    try {
      await trx('panoramas').insert(panoramasData);

      await trx.commit();
    } catch (error) {
      await trx.rollback();
      throw Error('Failed migration for fill seed data', error);
    }
  }
};
