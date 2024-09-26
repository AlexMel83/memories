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
  {
    user_id: 1,
    title: 'Замок князей Острожских',
    shooting_date: new Date('2021-01-01T00:00:00Z'),
    latitude: 49.7577553,
    longitude: 27.2283306,
    view_mode: '3a',
    yaw: 75.0,
    heading: 1.29,
    tilt: 49.56,
    pano_id: 'AF1QipOa4i5jfYXZNZuvkkjfVRIuZUZm0ypQaQ1JIdYQ',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipOa4i5jfYXZNZuvkkjfVRIuZUZm0ypQaQ1JIdYQ=w900-h600-k-no-pi40.443065282690824-ya1.285500178910084-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Instrument-Shop',
    shooting_date: new Date('2021-04-01T00:00:00Z'),
    latitude: 49.7572705,
    longitude: 27.2227773,
    view_mode: '3a',
    yaw: 75.0,
    heading: 242.45,
    tilt: 90.22,
    pano_id: 'AF1QipNauz-nYJ5LG3nsuULM1E7UNcmr-_EjhCmrwpE0',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipNauz-nYJ5LG3nsuULM1E7UNcmr-_EjhCmrwpE0=w900-h600-k-no-pi-0.22009761150472684-ya242.16954747764746-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Дантур',
    shooting_date: new Date('2018-09-01T00:00:00Z'),
    latitude: 49.7554466,
    longitude: 27.2206001,
    view_mode: '3a',
    yaw: 75.0,
    heading: 325.51,
    tilt: 85.2,
    pano_id: 'AF1QipM6HxeYKpiB7f3kuI35SKClGyy7TpCeH8dQrkc9',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipM6HxeYKpiB7f3kuI35SKClGyy7TpCeH8dQrkc9=w900-h600-k-no-pi4.799021927011481-ya326.72448298648914-ro0-fo100',
    image_width: 10000,
    image_height: 5000,
  },
  {
    user_id: 1,
    title: 'Сауна Случ',
    shooting_date: new Date('2019-01-01T00:00:00Z'),
    latitude: 49.7562349,
    longitude: 27.2196233,
    view_mode: '3a',
    yaw: 75.0,
    heading: 182.57,
    tilt: 72.86,
    pano_id: 'AF1QipNdxiAalLCJeBLDVQTh6uxl9hg4X8dA41lpZzXl',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipNdxiAalLCJeBLDVQTh6uxl9hg4X8dA41lpZzXl=w900-h600-k-no-pi17.139506511407276-ya204.3966689866459-ro0-fo100',
    image_width: 10000,
    image_height: 5000,
  },
  {
    user_id: 1,
    title: 'Hotelʹ Sluch',
    shooting_date: new Date('2019-02-01T00:00:00Z'),
    latitude: 49.7562072,
    longitude: 27.21941,
    view_mode: '3a',
    yaw: 75.0,
    heading: 256.14,
    tilt: 75.75,
    pano_id: 'AF1QipN73qQ-VZPOxNdPiC9PRemybxzT_VOnJedGeQEi',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipN73qQ-VZPOxNdPiC9PRemybxzT_VOnJedGeQEi=w900-h600-k-no-pi14.24996237761492-ya256.1387800801389-ro0-fo100',
    image_width: 10000,
    image_height: 5000,
  },
  {
    user_id: 1,
    title: 'Вікна двері ТОВ ГордаБуд',
    shooting_date: new Date('2020-10-01T00:00:00Z'),
    latitude: 49.7552849,
    longitude: 27.2104506,
    view_mode: '3a',
    yaw: 75.0,
    heading: 137,
    tilt: 84.9,
    pano_id: 'AF1QipMx36UOmJhvxmfVyqyBhLg9mXRuyzc402mbHLY0',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipMx36UOmJhvxmfVyqyBhLg9mXRuyzc402mbHLY0=w900-h600-k-no-pi5.100698579779348-ya207.5070416250865-ro0-fo100',
    image_width: 10000,
    image_height: 5000,
  },
  {
    user_id: 1,
    title: 'ЦНАП',
    shooting_date: new Date('2015-05-01T00:00:00Z'),
    latitude: 49.7547143,
    longitude: 27.2068383,
    view_mode: '3a',
    yaw: 75.0,
    heading: 341.35,
    tilt: 94.07,
    pano_id: 'lLYUHpKOjpgOcgJlrddfKg',
    thumbnail_url:
      'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?cb_client=maps_sv.tactile&w=900&h=600&pitch=-4.065509086571353&panoid=lLYUHpKOjpgOcgJlrddfKg&yaw=341.34648233362856',
    image_width: 13312,
    image_height: 6656,
  },
  {
    user_id: 1,
    title: 'Мототехніка Старокостянтинів',
    shooting_date: new Date('2021-10-01T00:00:00Z'),
    latitude: 49.7538201,
    longitude: 27.2043213,
    view_mode: '3a',
    yaw: 75.0,
    heading: 340.82,
    tilt: 91.37,
    pano_id: 'AF1QipNFEWw123lZRd7CeUTDwc3sA4QzlrA2v83KMJHZ',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipNFEWw123lZRd7CeUTDwc3sA4QzlrA2v83KMJHZ=w900-h600-k-no-pi-1.3703767597165069-ya268.9739757697253-ro0-fo100',
    image_width: 10000,
    image_height: 5000,
  },
  {
    user_id: 1,
    title: 'Office Centre',
    shooting_date: new Date('2020-02-01T00:00:00Z'),
    latitude: 49.7563327,
    longitude: 27.1862467,
    view_mode: '3a',
    yaw: 75.0,
    heading: 209.4,
    tilt: 87.29,
    pano_id: 'AF1QipOJ-Avee4cpUZ_4fJq7ywt43sRUHzVwkGKHfepJ',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipOJ-Avee4cpUZ_4fJq7ywt43sRUHzVwkGKHfepJ=w900-h600-k-no-pi2.7099999999999937-ya357.4-ro0-fo100',
    image_width: 11264,
    image_height: 5632,
  },
  {
    user_id: 1,
    title: 'Зоомагазин ФОП Бухтоярова Е.А.',
    shooting_date: new Date('2021-04-01T00:00:00Z'),
    latitude: 49.7550101,
    longitude: 27.1874278,
    view_mode: '3a',
    yaw: 75.0,
    heading: 221.84,
    tilt: 88.27,
    pano_id: 'AF1QipOfwNYXxKOSwD79THyIe-3GWyP3IIM2Ib2soQwZ',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipOfwNYXxKOSwD79THyIe-3GWyP3IIM2Ib2soQwZ=w900-h600-k-no-pi1.7274168154856397-ya223.0102149253349-ro0-fo100',
    image_width: 10000,
    image_height: 5000,
  },
  {
    user_id: 1,
    title: 'СТО "Гараж"',
    shooting_date: new Date('2020-10-01T00:00:00Z'),
    latitude: 49.7582378,
    longitude: 27.1820207,
    view_mode: '3a',
    yaw: 75.0,
    heading: 281.28,
    tilt: 90.62,
    pano_id: 'AF1QipNw6OiF6j_d883xq5u1dRXfrAOT33yW_kH99j3q',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipNw6OiF6j_d883xq5u1dRXfrAOT33yW_kH99j3q=w900-h600-k-no-pi-0.6158385561304556-ya333.0620142605147-ro0-fo100',
    image_width: 10000,
    image_height: 5000,
  },
];

export const seed = async (knex) => {
  const seedExist = await knex('panoramas').select('*').where({ id: 51 });

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
