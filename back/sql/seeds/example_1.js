/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const usersData = [
  {
    email: 'example1@example.com',
    password: '$$2b$04$ZJj/HLhh.QF1LLJIDGdT9eijg17/yon.eChNPPcs.Un8j6CU00ohW',
    role: 'user',
    isactivated: 'true',
  },
  {
    email: 'example2@example.com',
    password: '$2b$04$ZJj/HLhh.QF1LLJIDGdT9eijg17/yon.eChNPPcs.Un8j6CU00ohW',
    role: 'manager',
    isactivated: 'true',
  },
  {
    email: 'example3@example.com',
    password: '$2b$04$ZJj/HLhh.QF1LLJIDGdT9eijg17/yon.eChNPPcs.Un8j6CU00ohW',
    role: 'manager',
    isactivated: 'true',
  },
  {
    email: 'admin@test.com',
    password: '$2b$04$tQRegvM0dP/R0gRh72nzJORrw401cKADsrZOppKQHaCwDeUkn/iKK',
    role: 'admin',
    isactivated: 'true',
    phone: '380987654321',
    name: 'Test',
    surname: 'User',
  },
  {
    email: 'admin4@admin.com',
    password: '$2b$04$ZJj/HLhh.QF1LLJIDGdT9eijg17/yon.eChNPPcs.Un8j6CU00ohW',
    role: 'admin',
    isactivated: 'true',
  },
  {
    email: 'example5@example.com',
    password: '$2b$04$ZJj/HLhh.QF1LLJIDGdT9eijg17/yon.eChNPPcs.Un8j6CU00ohW',
    role: 'manager',
    isactivated: 'true',
  },
  {
    email: 'example6@example.com',
    password: '$2b$04$ZJj/HLhh.QF1LLJIDGdT9eijg17/yon.eChNPPcs.Un8j6CU00ohW',
    role: 'manager',
    isactivated: 'true',
  },
  {
    email: 'dariazhur89@gmail.com',
    password: '$2b$04$7TfkL/l51rWdgD/KZuDste4UcdOTAltQtVoM9hZvuGalnZmq/r73i',
    role: 'user',
    isactivated: 'true',
    name: "Дар'я",
    surname: 'Журавльова',
  },
];

const memoriesData = [
  {
    title: 'Artinov Group',
    address: 'м. Вінниця, вул. Миколи Оводова, 22',
    location: 'SRID=4326;POINT(28.46894 49.233868)',
    date_event: '2020-04-02T20:38:01.896Z',
    description:
      'Зручне розташування нашого простору дозволяє максимально швидко добиратись як до нас, так і до найважливіших локацій міста. Ми знаходимось у самому серці міста — біля Водонапірної вежі на Європейській площі. У нашому просторі ви маєте великий вибір локацій, які ви можете зарезервувати для себе - проведення днів народжень, корпоративів та інших персональних заходів. У нас є дві окремі та зручні коворкінг-зони. Перша знаходиться на другому поверсі Артинова, друга на першому (колишня локація кінозалу). Тут кожен коворкер отримує своє персональне робоче місце, шафу для зберігання особистих речей та, окремі від загального простору, кухню, штурмову, дві скайп-кімнати, гардеробну, вбиральню та душову.',
    user_id: 1,
    published: true,
  },
  {
    title: 'iHUB',
    address: 'м. Вінниця, вул. Пушкіна, 11',
    location: 'SRID=4326;POINT(28.467728 49.230576)',
    description:
      'iHUB – це місце, де інновації відбуваються щодня. Молоді да досвідчені підприємці працюють, спілкуються та творять у приміщеннях сучасного коворкінгу, поєднаного з історичною архітектурою у самому центрі міста. Просторий open space, приватні офіси, оснащенні технікою дизайнерські переговорні кімнати, зони для відпочинку та зали для івентів – ми надаємо все, що необхідно для розвитку вашого стартапу. У нас тільки актуальні тематики заходів та топові спікери. Нудьгувати не прийдеться, адже Ви зможете знайти івенти на будь-який смак: майстер-класи, воркшопи, хакатони, зустрічі з інвесторами, пітчинги та ще багато іншого. iHUB не просто ком’юніті – це сім’я, де Ви можете приєднатись до найталановитіших підприємців та стартапів, знайти собі партнерів чи клієнтів, співробітників та інвесторів. Обирайте один з наших сервісів та програм, що допоможуть злетіти Вашому проєкту.',
    user_id: 2,
    published: true,
  },
  {
    title: 'Miro Space',
    address: 'м. Вінниця, вул. Келецька, 57',
    location: 'SRID=4326;POINT(28.419386 49.224543)',
    date_event: '2015-03-14T20:38:01.896Z',
    description:
      'Miro Space  Epicenter of innovations. Наша ціль  – створити iнновацiйне середовище i творчу атмосферу для роботи з метою розвитку нових технологiй в сферi блокчейну та IT.  Miro Space  – робочий простiр iнновацiй, в якому поєднали дiловий досвiд створення офiсiв з творчим пiдходом. Це мiсце для втiлення проєктiв, дiлового спiлкування, корисних подiй i знайомств, середовище для розвитку i примноження.',
    user_id: 3,
    published: true,
  },
  {
    title: 'CHERDAK SPASE',
    address: 'м. Вінниця, вул. Соборна, 24',
    location: 'SRID=4326;POINT(28.471802 49.232929)',
    description:
      'Простори для роботи та івентів. Ми забезпечуємо ваш робочий простір усім необхідним.',
    user_id: 4,
    published: true,
  },
  {
    title: 'Ume place',
    address: 'м. Вінниця, просп. Космонавтів, 30 А',
    location: 'SRID=4326;POINT(28.419834 49.226526)',
    date_event: '2018-11-07T20:38:01.896Z',
    description:
      'Ume.Place — це про приватність, комфорт та безпеку. Ми коворкінг закритого типу з великою кількістю простору та можливостей. Івент-менеджер допоможе організувати події, оператор та монтажер — створити контент, а наші адміністратори попіклуються про твій комфорт.',
    user_id: 5,
    published: true,
  },
  {
    title: 'EduHUB',
    address: 'м. Вінниця, Героїв поліції, 28',
    location: 'SRID=4326;POINT(28.447339 49.230173)',
    description:
      'EduHUB - це освітній креативний простір в центрі міста, щоб працювати, навчатись і надихатися, генерувати та втілювати нові і прогресивні ідеї, ділитися власними досягненнями та знаходити креативних друзів-однодумців. Організувати тематичні івенти, творчі й продуктивні посиденьки, семінари, майстер-класи, навчальні заняття, лекції, працювати над стартапами, креативити й надихатися за філіжанкою запашної кави.',
    user_id: 6,
    published: true,
  },
];

const memoryPhotosData = [
  {
    memory_id: 1,
    url: '/_nuxt/public/memoryimg/main-photo-1.jpg',
  },
  {
    memory_id: 1,
    url: '/_nuxt/public/memoryimg/cow-1-space-1.jpg',
  },
  {
    memory_id: 1,
    url: '/_nuxt/public/memoryimg/cow-1-space-2.jpg',
  },
  {
    memory_id: 1,
    url: '/_nuxt/public/memoryimg/cow-1-space-3.jpg',
  },
  {
    memory_id: 1,
    url: '/_nuxt/public/memoryimg/cow-1-space-4.jpg',
  },
  {
    memory_id: 1,
    url: '/_nuxt/public/memoryimg/cow-1-space-5.jpg',
  },
  {
    memory_id: 2,
    url: '/_nuxt/public/memoryimg/main-photo-2.jpg',
  },
  {
    memory_id: 2,
    url: '/_nuxt/public/memoryimg/cow-2-space-1.jpg',
  },
  {
    memory_id: 2,
    url: '/_nuxt/public/memoryimg/cow-2-space-2.jpg',
  },
  {
    memory_id: 2,
    url: '/_nuxt/public/memoryimg/cow-2-space-3.jpg',
  },
  {
    memory_id: 2,
    url: '/_nuxt/public/memoryimg/cow-2-space-4.jpg',
  },
  {
    memory_id: 2,
    url: '/_nuxt/public/memoryimg/cow-2-space-5.jpg',
  },
  {
    memory_id: 3,
    url: '/_nuxt/public/memoryimg/main-photo-3.jpg',
  },
  {
    memory_id: 3,
    url: '/_nuxt/public/memoryimg/cow-3-space-1.jpg',
  },
  {
    memory_id: 3,
    url: '/_nuxt/public/memoryimg/cow-3-space-2.jpg',
  },
  {
    memory_id: 3,
    url: '/_nuxt/public/memoryimg/cow-3-space-4.jpg',
  },
  {
    memory_id: 3,
    url: '/_nuxt/public/memoryimg/cow-3-space-5.jpg',
  },
  {
    memory_id: 3,
    url: '/_nuxt/public/memoryimg/cow-3-space-6.jpg',
  },
  {
    memory_id: 4,
    url: '/_nuxt/public/memoryimg/main-photo-4.jpg',
  },
  {
    memory_id: 4,
    url: '/_nuxt/public/memoryimg/cow-4-space-1.jpg',
  },
  {
    memory_id: 4,
    url: '/_nuxt/public/memoryimg/cow-4-space-3.jpg',
  },
  {
    memory_id: 4,
    url: '/_nuxt/public/memoryimg/cow-4-space-4.jpg',
  },
  {
    memory_id: 4,
    url: '/_nuxt/public/memoryimg/cow-4-space-5.jpg',
  },
  {
    memory_id: 4,
    url: '/_nuxt/public/memoryimg/cow-4-space-7.jpg',
  },
  {
    memory_id: 5,
    url: '/_nuxt/public/memoryimg/main-photo-5.jpg',
  },
  {
    memory_id: 6,
    url: '/_nuxt/public/memoryimg/main-photo-6.jpg',
  },
  {
    memory_id: 6,
    url: '/_nuxt/public/memoryimg/cow-6-space-1.jpg',
  },
  {
    memory_id: 6,
    url: '/_nuxt/public/memoryimg/cow-6-space-2.jpg',
  },
  {
    memory_id: 6,
    url: '/_nuxt/public/memoryimg/cow-6-space-3.jpg',
  },
  {
    memory_id: 6,
    url: '/_nuxt/public/memoryimg/cow-6-space-4.jpg',
  },
];

export const seed = async (knex) => {
  const seedExist = await knex('users').select('*').where({ id: 1 });

  if (!seedExist[0]) {
    const trx = await knex.transaction();

    try {
      await trx('users').insert(usersData);
      await trx('memories').insert(memoriesData);
      await trx('memory_photos').insert(memoryPhotosData);

      await trx.commit();
    } catch (error) {
      await trx.rollback();
      throw Error('Failed migration for fill seed data', error);
    }
  }
};
