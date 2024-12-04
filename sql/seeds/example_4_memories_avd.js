/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const memoriesData = [
    {
      source_type: 'site',
      source_url: 'https://takflix.com/uk/films/narodnyy-muzey-avdiyivky',
      title: 'Народний музей Авдіївки',
      address: 'м. Авдіївка, вул. Комунальна, 11',
      location: 'SRID=4326;POINT(37.7424385 48.1332604)',
      date_event: '2018-01-01T20:38:01.896Z',
      description:
        'Головна експозиція музею в Авдіївці була присвячена Кавказу. У 2015 році в музей влучили російські снаряди, що знищили частину експозиції. Але тепер в Авдіївці знову є народний музей – місце, де оживають найдивніші ідеї. Режисер фільму «Новий дім» Богдан Приходько.',
      user_id: 1,
      published: true,
    },
    {
      source_type: 'youtube',
      source_url: 'https://www.youtube.com/shorts/O-bghfdafeA',
      title: 'Лариса, я в Авдеевке!',
      address: 'м. Авдіївка, вул. Грушевського, 75',
      location: 'SRID=4326;POINT(37.741756 48.139113)',
      date_event: '2024-03-17T20:38:01.896Z',
      description:
        'Лариса, я в Авдеевке! Тут в этих домах все есть. Телевизоры, чего только нету! Только надо электричку какую-то грузовую и вывозить отсюда! Российский мародер "освободил" жителей Донбасса от жизни и теперь пожинает плоды своего "спасения".',
      user_id: 1,
      published: true,
    },
    {
      source_type: 'youtube',
      source_url: 'https://www.youtube.com/shorts/TI72SnsTBcY',
      title: 'Росіянка приїхала в тимчасово окуповану Авдіївку МАРОДЕРИТИ',
      address: 'м. Авдіївка, вул. Комунальна, 6',
      location: 'SRID=4326;POINT(37.736276 48.134164)',
      date_event: '2024-03-17T20:38:01.896Z',
      description:
        'Росіянка приїхала в тимчасово окуповану Авдіївку МАРОДЕРИТИ',
      user_id: 1,
      published: true,
    },
  ],
  memoryPhotosData = [
    {
      memory_id: 7,
      url: '/memoryimg/avd-narodniy-muzey.png',
    },
  ];

export const seed = async (knex) => {
  const seedExist = await knex('memories').select('*').where({ id: 7 });

  if (!seedExist[0]) {
    const trx = await knex.transaction();

    try {
      await trx('memories').insert(memoriesData);
      await trx('memory_photos').insert(memoryPhotosData);

      await trx.commit();
    } catch (error) {
      await trx.rollback();
      throw Error('Failed migration for fill seed data', error);
    }
  }
};
