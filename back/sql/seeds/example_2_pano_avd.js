/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const panoramasData = [
  {
    user_id: 1,
    title: 'Мурал учителю',
    shooting_date: new Date('2020-11-01T00:00:00Z'),
    latitude: 48.1269723,
    longitude: 37.7496645,
    view_mode: '3a',
    yaw: 75.0,
    heading: 1.41,
    tilt: 109.19,
    pano_id: 'AF1QipNabCooV1K8Xn4yR_L-WsoFlxECn-39BJlcTe-w',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipNabCooV1K8Xn4yR_L-WsoFlxECn-39BJlcTe-w=w900-h600-k-no-pi-19.188963528769364-ya1.4060929746717203-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Памятник-самолет рядом с ДК вид слева',
    shooting_date: new Date('2020-08-01T00:00:00Z'),
    latitude: 48.1243642,
    longitude: 37.7392798,
    view_mode: '3a',
    yaw: 75.0,
    heading: 75.0,
    tilt: 105.0,
    pano_id: 'AF1QipM_VHqdi0dZQY_KG5CdL2hRWNH1vJUth0dZWrOr',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipM_VHqdi0dZQY_KG5CdL2hRWNH1vJUth0dZWrOr=w900-h600-k-no-pi1.3339376733836872-ya2.1846702323134934-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Народный Музей истории г.Авдеевка 1',
    shooting_date: new Date('2020-11-01T00:00:00Z'),
    latitude: 48.1332586,
    longitude: 37.7424614,
    view_mode: '3a',
    yaw: 90.0,
    heading: 280.0,
    tilt: 80.0,
    pano_id: 'AF1QipMmwTp49GEAk-rfyE_OX_Vej5zE9QFV4b3bLUeV',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipMmwTp49GEAk-rfyE_OX_Vej5zE9QFV4b3bLUeV=w900-h600-k-no-pi9.001770940598163-ya130.1755948405591-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'ЧАО Авдеевский коксохимический завод',
    shooting_date: new Date('2018-03-01T00:00:00Z'),
    latitude: 48.1652616,
    longitude: 37.7062301,
    view_mode: '3a',
    yaw: 75.0,
    heading: 190.0,
    tilt: 90,
    pano_id: 'AF1QipPnwi4IPyREMBJDiyNkjCZR-c9P_nkGY9OfrMbz',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipPnwi4IPyREMBJDiyNkjCZR-c9P_nkGY9OfrMbz=w900-h600-k-no-pi-13.986047485245365-ya209.40411122423217-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Муралы по Менделеева',
    shooting_date: new Date('2020-11-01T00:00:00Z'),
    latitude: 48.1301579,
    longitude: 37.7455533,
    view_mode: '3a',
    yaw: 37.5,
    heading: 90.82,
    tilt: 95.39,
    pano_id: 'AF1QipPI80WnYTKQF0fTT3UPSDn41_hbQehzusU09OKB',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipPI80WnYTKQF0fTT3UPSDn41_hbQehzusU09OKB=w900-h600-k-no-pi-5.388752469548876-ya90.82248607848818-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Мурал на 7 школе',
    shooting_date: new Date('2020-11-01T00:00:00Z'),
    latitude: 48.1327187,
    longitude: 37.7360945,
    view_mode: '3a',
    yaw: 75.0,
    heading: 18.2,
    tilt: 89.78,
    pano_id: 'AF1QipMIQScy8JChqNYxuE4gynxXthsz9nBFNylPRDVL',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipMIQScy8JChqNYxuE4gynxXthsz9nBFNylPRDVL=w900-h600-k-no-pi0.21627432311673545-ya18.204668158424635-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Храм Святителя Николая Чудотворца',
    shooting_date: new Date('2020-08-01T00:00:00Z'),
    latitude: 48.1488208,
    longitude: 37.735366,
    view_mode: '3a',
    yaw: 75.0,
    heading: 10.0,
    tilt: 90.0,
    pano_id: 'AF1QipN2wysmWQctLFc6ZSZNs5h0wgg6SBFIiGXeQ3SR',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipN2wysmWQctLFc6ZSZNs5h0wgg6SBFIiGXeQ3SR=w900-h600-k-no-pi1.010087574467832-ya351.2398906000293-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Народный Музей истории г.Авдеевка 2',
    shooting_date: new Date('2020-11-01T00:00:00Z'),
    latitude: 48.1332604,
    longitude: 37.7424385,
    view_mode: '3a',
    yaw: 75.0,
    heading: 128.72,
    tilt: 74.21,
    pano_id: 'AF1QipNEka50_IFgwVM81hJ7ccaQRR4V6fJSKFV44ltb',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipNEka50_IFgwVM81hJ7ccaQRR4V6fJSKFV44ltb=w900-h600-k-no-pi15.79088743729821-ya185.13544415465844-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Памятник-самолет рядом с ДК',
    shooting_date: new Date('2020-06-01T00:00:00Z'),
    latitude: 48.124649,
    longitude: 37.7396545,
    view_mode: '3a',
    yaw: 75.0,
    heading: 150.0,
    tilt: 105.0,
    pano_id: 'AF1QipM2ogA06fW8Hf8enH4qY0hnZMS66F1OeEIeD6d7',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipM2ogA06fW8Hf8enH4qY0hnZMS66F1OeEIeD6d7=w900-h600-k-no-pi-2.324985286472682-ya358.4085809784458-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Дворец культуры техники и спорта АКХЗ',
    shooting_date: new Date('2020-06-01T00:00:00Z'),
    latitude: 48.1247711,
    longitude: 37.7389984,
    view_mode: '3a',
    yaw: 75.0,
    heading: 258.62,
    tilt: 83.88,
    pano_id: 'AF1QipN7SN-_thtyyT7q3bQFhPjYf8NsTdhJgf8P92Bw',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipN7SN-_thtyyT7q3bQFhPjYf8NsTdhJgf8P92Bw=w900-h600-k-no-pi6.120228400486283-ya3.619455917563016-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Бывшая детская площадка "Замок"',
    shooting_date: new Date('2021-03-01T00:00:00Z'),
    latitude: 48.1255525,
    longitude: 37.7379349,
    view_mode: '3a',
    yaw: 75.0,
    heading: 126.93,
    tilt: 93.92,
    pano_id: 'AF1QipOwp2cuEhwvuMhjrfcp8yt6-7FxTCYXFYy-bgqR',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipOwp2cuEhwvuMhjrfcp8yt6-7FxTCYXFYy-bgqR=w900-h600-k-no-pi-3.923793773223238-ya53.92859890122763-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Городская елка ДК',
    shooting_date: new Date('2021-01-01T00:00:00Z'),
    latitude: 48.1262054,
    longitude: 37.7385291,
    view_mode: '3a',
    yaw: 75.0,
    heading: 260.19,
    tilt: 90.76,
    pano_id: 'AF1QipOIX6f_gPAKCxZUcDjvGH3Qr1gu_aCpv0TivNzj',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipOIX6f_gPAKCxZUcDjvGH3Qr1gu_aCpv0TivNzj=w900-h600-k-no-pi-0.7556488078000712-ya353.1869707910696-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Школа №5',
    shooting_date: new Date('2020-06-01T00:00:00Z'),
    latitude: 48.1275101,
    longitude: 37.7436752,
    view_mode: '3a',
    yaw: 75.0,
    heading: 71.08,
    tilt: 86.34,
    pano_id: 'AF1QipO0hTC6KdgPSxIiEKIjGS3UiMHjAoHZjEuBxgGd',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipO0hTC6KdgPSxIiEKIjGS3UiMHjAoHZjEuBxgGd=w900-h600-k-no-pi3.664026199252419-ya359.08288606013457-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Стадион "Коксохимик"',
    shooting_date: new Date('2023-03-01T00:00:00Z'),
    latitude: 48.1322137,
    longitude: 37.74751,
    view_mode: '3a',
    yaw: 75.0,
    heading: 350.35,
    tilt: 95.89,
    pano_id: 'AF1QipN2iTPs8JnfcczhAVCtg26wTyAw4wrOizzWb6Hg',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipN2iTPs8JnfcczhAVCtg26wTyAw4wrOizzWb6Hg=w900-h600-k-no-pi-5.8869658450269355-ya277.34520832850245-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Мурал подстанция Менделева',
    shooting_date: new Date('2020-12-01T00:00:00Z'),
    latitude: 48.1300583,
    longitude: 37.7452768,
    view_mode: '3a',
    yaw: 75.0,
    heading: 353.17,
    tilt: 98.06,
    pano_id: 'AF1QipNHxuhnZfEF4XPNaDOlyUV6ngs_AmWB_jG0EHDE',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipNHxuhnZfEF4XPNaDOlyUV6ngs_AmWB_jG0EHDE=w900-h600-k-no-pi-8.059838019162669-ya353.17487175251927-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Стелла Ilove Авдіївка',
    shooting_date: new Date('2020-06-01T00:00:00Z'),
    latitude: 48.1304779,
    longitude: 37.7444687,
    view_mode: '3a',
    yaw: 75.0,
    heading: 149.16,
    tilt: 90.36,
    pano_id: 'AF1QipMpNSP8BRcorwsLhzOfS4aSXpJPq6Fvs8q6P4pD',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipMpNSP8BRcorwsLhzOfS4aSXpJPq6Fvs8q6P4pD=w900-h600-k-no-pi-0.3632450777657681-ya349.1631065323213-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Мурал козаку Мамаю на Гагарина',
    shooting_date: new Date('2020-11-01T00:00:00Z'),
    address: 'Донецька область, Авдіївка, Гагаріна, 14',
    latitude: 48.1308849,
    longitude: 37.745031,
    view_mode: '3a',
    yaw: 75.0,
    heading: 354.06,
    tilt: 114.06,
    pano_id: 'AF1QipPOMz-Vdwc5Z2m4J2S47YZVYqikU44kBX3mgc2w',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipPOMz-Vdwc5Z2m4J2S47YZVYqikU44kBX3mgc2w=w900-h600-k-no-pi-24.063141182501866-ya354.0619290754809-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Мурал Гагарина 8',
    shooting_date: new Date('2020-11-01T00:00:00Z'),
    address: 'Донецька область, Авдіївка, Гагаріна, 8',
    latitude: 48.1306953,
    longitude: 37.7420006,
    view_mode: '3a',
    yaw: 75.0,
    heading: 181.3,
    tilt: 120.37,
    pano_id: 'AF1QipP7radNKLBntDaxkaQJ6Ut7-K39RiqYHI53CX93',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipP7radNKLBntDaxkaQJ6Ut7-K39RiqYHI53CX93=w900-h600-k-no-pi-30.373467783035792-ya181.29986113100733-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Мурал Гагарина 2',
    shooting_date: new Date('2020-11-01T00:00:00Z'),
    address: 'Донецька область, Авдіївка, Гагаріна, 2',
    latitude: 48.130434,
    longitude: 37.7395516,
    view_mode: '3a',
    yaw: 75.0,
    heading: 162.09,
    tilt: 103.09,
    pano_id: 'AF1QipPmiTBgK6nCb3PeXMRTCD8Muted0UWOzSokoSE-',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipPmiTBgK6nCb3PeXMRTCD8Muted0UWOzSokoSE-=w900-h600-k-no-pi-13.091050692598941-ya162.0938421396891-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Авдеевский городской Стадион Зима',
    shooting_date: new Date('2021-01-01T00:00:00Z'),
    latitude: 48.1316643,
    longitude: 37.7466622,
    view_mode: '3a',
    yaw: 75.0,
    heading: 104.69,
    tilt: 88.43,
    pano_id: 'AF1QipMVVbvPYsvNEXcEvmvuTQZZuqWXHK6ZjitIfK6N',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipMVVbvPYsvNEXcEvmvuTQZZuqWXHK6ZjitIfK6N=w900-h600-k-no-pi1.5665141230766295-ya112.69003712915315-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Стадион возле школы №6',
    shooting_date: new Date('2021-01-01T00:00:00Z'),
    latitude: 48.1321144,
    longitude: 37.744877,
    view_mode: '3a',
    yaw: 75.0,
    heading: 266.94,
    tilt: 82.46,
    pano_id: 'AF1QipNQZrMVccyH1p6f8-8pDB3l5gxRIsLiS7zY_qJg',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipNQZrMVccyH1p6f8-8pDB3l5gxRIsLiS7zY_qJg=w900-h600-k-no-pi7.535931562824231-ya293.9407359601178-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Общеобразовательная школа №6',
    shooting_date: new Date('2021-01-01T00:00:00Z'),
    latitude: 48.1326141,
    longitude: 37.7433853,
    view_mode: '3a',
    yaw: 75.0,
    heading: 70.67,
    tilt: 100.84,
    pano_id: 'AF1QipOeumwOonEegiDOxgsq3Khe8ONONG2IAjzH6TFA',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipOeumwOonEegiDOxgsq3Khe8ONONG2IAjzH6TFA=w900-h600-k-no-pi-10.836025032490738-ya1.6665397630361127-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Общеобразовательная школа №6 осень',
    shooting_date: new Date('2021-01-11T00:00:00Z'),
    latitude: 48.1326512,
    longitude: 37.7431099,
    view_mode: '3a',
    yaw: 75.0,
    heading: 77.89,
    tilt: 101.82,
    pano_id: 'AF1QipPjfqh2km2t9nHLAcTrAbji1_p7z0VnRUjslNLm',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipPjfqh2km2t9nHLAcTrAbji1_p7z0VnRUjslNLm=w900-h600-k-no-pi-11.821978774676623-ya93.88523197241318-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Памятник Тарасу Шевченко',
    shooting_date: new Date('2021-01-01T00:00:00Z'),
    latitude: 48.1323967,
    longitude: 37.740532,
    view_mode: '3a',
    yaw: 75.0,
    heading: 70.55,
    tilt: 88.83,
    pano_id: 'AF1QipPsFO_zFuN6wiAIttE_R08rPRRjFLmPZHShOmFo',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipPsFO_zFuN6wiAIttE_R08rPRRjFLmPZHShOmFo=w900-h600-k-no-pi1.174736154217939-ya0.5506335810193974-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Авдіївська центральна міська поліклініка',
    shooting_date: new Date('2021-11-01T00:00:00Z'),
    latitude: 48.1320411,
    longitude: 37.7297316,
    view_mode: '3a',
    yaw: 75.0,
    heading: 202.9,
    tilt: 88.92,
    pano_id: 'AF1QipOZFg86Xa9wYm210Q7mjXPoCO8g8zqfgp8CycVo',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipOZFg86Xa9wYm210Q7mjXPoCO8g8zqfgp8CycVo=w900-h600-k-no-pi1.0797644211726407-ya27.903251980145143-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: '"Тропа Здоровья"',
    shooting_date: new Date('2020-05-01T00:00:00Z'),
    latitude: 48.1392561,
    longitude: 37.7365305,
    view_mode: '3a',
    yaw: 75.0,
    heading: 342.85,
    tilt: 88.36,
    pano_id: 'AF1QipOYG-6u7kfkLD0dRqn49IM5vlG15gIxj4GommF0',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipOYG-6u7kfkLD0dRqn49IM5vlG15gIxj4GommF0=w900-h600-k-no-pi1.6366414613052456-ya6.8530376785059275-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'АКХЗ какой то цех',
    shooting_date: new Date('2022-01-01T00:00:00Z'),
    latitude: 48.1691957,
    longitude: 37.7034061,
    view_mode: '3a',
    yaw: 75.0,
    heading: 117.29,
    tilt: 85.44,
    pano_id: 'AF1QipN7otNsCjTTL1YOEgDeosEieCaLMNtZR1V94nCA',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipN7otNsCjTTL1YOEgDeosEieCaLMNtZR1V94nCA=w900-h600-k-no-pi4.556638269863512-ya58.285733768665935-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Авдіївський карьєр "Блакитні озера"',
    shooting_date: new Date('2020-05-01T00:00:00Z'),
    latitude: 48.1573014,
    longitude: 37.7457328,
    view_mode: '3a',
    yaw: 75.0,
    heading: 59.23,
    tilt: 95.79,
    pano_id: 'AF1QipP8VkW6-BEYGVOY4tFivFatN_0_CsscOZdn7ilu',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipP8VkW6-BEYGVOY4tFivFatN_0_CsscOZdn7ilu=w900-h600-k-no-pi-5.793447895835101-ya356.22730730393545-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Авдіївський пляж "Блакитні озера"',
    shooting_date: new Date('2020-06-01T00:00:00Z'),
    latitude: 48.1561546,
    longitude: 37.7614517,
    view_mode: '3a',
    yaw: 75.0,
    heading: 273.62,
    tilt: 90.65,
    pano_id: 'AF1QipOtBNnPRItB33f5uyQbp9unElqQDafH_uZ-x9KF',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipOtBNnPRItB33f5uyQbp9unElqQDafH_uZ-x9KF=w900-h600-k-no-pi-0.6536917302199043-ya76.62342733872305-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Авдіївський пляж "Блакитні озера" 2',
    shooting_date: new Date('2020-06-01T00:00:00Z'),
    latitude: 48.155777,
    longitude: 37.7595177,
    view_mode: '3a',
    yaw: 75.0,
    heading: 148.3,
    tilt: 80.77,
    pano_id: 'AF1QipPx_raGSOiwo6SaaGO9xFrGGZ4GfPyYLQDs3gdq',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipPx_raGSOiwo6SaaGO9xFrGGZ4GfPyYLQDs3gdq=w900-h600-k-no-pi9.229927327559011-ya49.30380832493526-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Авдіївський пляж "Блакитні озера" земснаряд',
    shooting_date: new Date('2020-06-01T00:00:00Z'),
    latitude: 48.157753,
    longitude: 37.7631683,
    view_mode: '3a',
    yaw: 75.0,
    heading: 263.48,
    tilt: 67.04,
    pano_id: 'AF1QipN8UXWX8iaDvEJtO60O3goxk6i8QHMM9xV6BNdp',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipN8UXWX8iaDvEJtO60O3goxk6i8QHMM9xV6BNdp=w900-h600-k-no-pi22.957757842341962-ya335.4813628478455-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Авдіївський пляж "Блакитні озера" земснаряд пантони',
    shooting_date: new Date('2020-06-01T00:00:00Z'),
    latitude: 48.1581764,
    longitude: 37.7634659,
    view_mode: '3a',
    yaw: 75.0,
    heading: 170.3,
    tilt: 79.11,
    pano_id: 'AF1QipPv1re9HyoVjZMFAarfOaozdCbtYfASYEJsmdPI',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipPv1re9HyoVjZMFAarfOaozdCbtYfASYEJsmdPI=w900-h600-k-no-pi10.885764099739475-ya275.30253386363114-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Дикий пляж "Блакитні озера"',
    shooting_date: new Date('2020-05-01T00:00:00Z'),
    latitude: 48.1615256,
    longitude: 37.7477683,
    view_mode: '3a',
    yaw: 75.0,
    heading: 190.49,
    tilt: 82.98,
    pano_id: 'AF1QipODbfD7jCWWFYHsPbuItOEiTgneKMBW4jq1lkMt',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipODbfD7jCWWFYHsPbuItOEiTgneKMBW4jq1lkMt=w900-h600-k-no-pi7.01709865739565-ya37.494373659605884-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Кладбище на песочном',
    shooting_date: new Date('2020-06-01T00:00:00Z'),
    latitude: 48.1493835,
    longitude: 37.7533455,
    view_mode: '3a',
    yaw: 75.0,
    heading: 24.22,
    tilt: 88.67,
    pano_id: 'AF1QipM2kKQXHPB0EpHhzzTOlAYMBsNO6RV7hiQTwUJ4',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipM2kKQXHPB0EpHhzzTOlAYMBsNO6RV7hiQTwUJ4=w900-h600-k-no-pi1.3282848795476525-ya13.223050539472297-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Мост возле ЖД',
    shooting_date: new Date('2020-06-01T00:00:00Z'),
    latitude: 48.1494598,
    longitude: 37.7312469,
    view_mode: '3a',
    yaw: 75.0,
    heading: 10.43,
    tilt: 98.79,
    pano_id: 'AF1QipOCO7e6JRmk3A-5R3lglEmi-U5BHYwcMLLT7RjI',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipOCO7e6JRmk3A-5R3lglEmi-U5BHYwcMLLT7RjI=w900-h600-k-no-pi-8.790770389842436-ya260.43459977083853-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Мост возле ЖД 2',
    shooting_date: new Date('2020-06-01T00:00:00Z'),
    latitude: 48.1494752,
    longitude: 37.7308943,
    view_mode: '3a',
    yaw: 75.0,
    heading: 81.15,
    tilt: 92.5,
    pano_id: 'AF1QipPBPCplSC6OMHWW3wQbcs2IbglCcx-wXCPXYZ51',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipPBPCplSC6OMHWW3wQbcs2IbglCcx-wXCPXYZ51=w900-h600-k-no-pi-2.4970035832911606-ya45.1495183965057-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Памятник солдату парк ЖД',
    shooting_date: new Date('2020-11-01T00:00:00Z'),
    latitude: 48.1500587,
    longitude: 37.7360497,
    view_mode: '3a',
    yaw: 75.0,
    heading: 189.15,
    tilt: 95.51,
    pano_id: 'AF1QipPKj0ZSsisQF4QS2l7IyFB-nkpsdVpvvyOhjhdm',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipPKj0ZSsisQF4QS2l7IyFB-nkpsdVpvvyOhjhdm=w900-h600-k-no-pi-5.505260284475952-ya19.154256258037606-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Парк ЖД',
    shooting_date: new Date('2020-10-01T00:00:00Z'),
    latitude: 48.1500282,
    longitude: 37.7374153,
    view_mode: '3a',
    yaw: 75.0,
    heading: 284.81,
    tilt: 91.91,
    pano_id: 'AF1QipPswstqu8wimVy8tPn3-L2LM1AeQOl6Q5Hx3dFK',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipPswstqu8wimVy8tPn3-L2LM1AeQOl6Q5Hx3dFK=w900-h600-k-no-pi-1.9070940787947421-ya342.8109821562713-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Дорога рядом с ЖД станцией',
    shooting_date: new Date('2020-06-01T00:00:00Z'),
    latitude: 48.1434593,
    longitude: 37.7397156,
    view_mode: '3a',
    yaw: 75.0,
    heading: 329.76,
    tilt: 86.96,
    pano_id: 'AF1QipMG9_Ix1dtk8P4hW9zVkJqKRvVZK117Ni-QgL8I',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipMG9_Ix1dtk8P4hW9zVkJqKRvVZK117Ni-QgL8I=w900-h600-k-no-pi3.035753557290832-ya317.7586861398987-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Переход ЖД возле пятиэтажки',
    shooting_date: new Date('2020-06-01T00:00:00Z'),
    latitude: 48.1393954,
    longitude: 37.7466876,
    view_mode: '3a',
    yaw: 75.0,
    heading: 256.05,
    tilt: 84.28,
    pano_id: 'AF1QipOYJ71UCnKziM5lFB6907wCJ0QQS6H2zHXnf7Sf',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipOYJ71UCnKziM5lFB6907wCJ0QQS6H2zHXnf7Sf=w900-h600-k-no-pi5.724897664442921-ya183.0495228410711-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Переход ЖД возле семафора',
    shooting_date: new Date('2020-06-01T00:00:00Z'),
    latitude: 48.1378403,
    longitude: 37.7486343,
    view_mode: '3a',
    yaw: 75.0,
    heading: 201.12,
    tilt: 71.69,
    pano_id: 'AF1QipNwPBgtKZQUIhJIayxjYXZpwQk4pG1KEU2Diuiy',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipNwPBgtKZQUIhJIayxjYXZpwQk4pG1KEU2Diuiy=w900-h600-k-no-pi18.310818226192197-ya92.1218885525011-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'ЖД переход семафор-четырнаха',
    shooting_date: new Date('2021-03-01T00:00:00Z'),
    latitude: 48.1349796,
    longitude: 37.7508584,
    view_mode: '3a',
    yaw: 75.0,
    heading: 111.67,
    tilt: 91.62,
    pano_id: 'AF1QipOmivmBo0pFSP42-F5_Pdc8rsRWV9FyhqTl-3iO',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipOmivmBo0pFSP42-F5_Pdc8rsRWV9FyhqTl-3iO=w900-h600-k-no-pi-1.6225274834903587-ya38.669344677189116-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Авдіївска "Промка"',
    shooting_date: new Date('2019-12-01T00:00:00Z'),
    latitude: 48.119294,
    longitude: 37.7873428,
    view_mode: '3a',
    yaw: 75.0,
    heading: 158.71,
    tilt: 117.79,
    pano_id: 'AF1QipNRZMUKJipnhBnQPjJDKAJW4OV-94tQJVJKg9T2',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipNRZMUKJipnhBnQPjJDKAJW4OV-94tQJVJKg9T2=w900-h600-k-no-pi-27.793396902218348-ya36.71348834582466-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Стекляшка',
    shooting_date: new Date('2020-06-01T00:00:00Z'),
    latitude: 48.1293495,
    longitude: 37.7362746,
    view_mode: '3a',
    yaw: 75.0,
    heading: 321.63,
    tilt: 86.21,
    pano_id: 'AF1QipOFoHGJPLbRZUQ2tq-bN-zzXL_1rUgVROQzQURZ',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipOFoHGJPLbRZUQ2tq-bN-zzXL_1rUgVROQzQURZ=w900-h600-k-no-pi3.7888741103127046-ya284.6347115009731-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Поле рядом с садиком Ивушка',
    shooting_date: new Date('2021-01-01T00:00:00Z'),
    latitude: 48.1291542,
    longitude: 37.735424,
    view_mode: '3a',
    yaw: 75.0,
    heading: 111.48,
    tilt: 88.82,
    pano_id: 'AF1QipPfLPAH2O0eefXVZMBZXlKwP9V05fQ4e-O2kVnH',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipPfLPAH2O0eefXVZMBZXlKwP9V05fQ4e-O2kVnH=w900-h600-k-no-pi1.1848260772233914-ya177.4841408724911-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Угол Ул. 9 Квартал д. 10',
    shooting_date: new Date('2020-11-01T00:00:00Z'),
    latitude: 48.1284485,
    longitude: 37.7352295,
    view_mode: '3a',
    yaw: 75.0,
    heading: 108.47,
    tilt: 86.27,
    pano_id: 'AF1QipPs_o5EEwdVVZuMZs7-CiOpdD_xD_bX8aBRgI_e',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipPs_o5EEwdVVZuMZs7-CiOpdD_xD_bX8aBRgI_e=w900-h600-k-no-pi3.727825726924209-ya103.46883330976965-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Водяне ставок',
    shooting_date: new Date('2021-07-01T00:00:00Z'),
    latitude: 48.0993614,
    longitude: 37.618042,
    view_mode: '3a',
    yaw: 75.0,
    heading: 1.11,
    tilt: 100.2,
    pano_id: 'AF1QipO3PiBZu8tkk2jb8JCwBNQpcVypboGT4cipI6Fr',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipO3PiBZu8tkk2jb8JCwBNQpcVypboGT4cipI6Fr=w900-h600-k-no-pi-10.19547553802235-ya175.10763668981608-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Водяне поле',
    shooting_date: new Date('2021-07-01T00:00:00Z'),
    latitude: 48.104697,
    longitude: 37.6177055,
    view_mode: '3a',
    yaw: 75.0,
    heading: 317.36,
    tilt: 90.29,
    pano_id: 'AF1QipO-U1LIHqdz_5Xa4QGGZGQloogMnqv931QlSeor',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipO-U1LIHqdz_5Xa4QGGZGQloogMnqv931QlSeor=w900-h600-k-no-pi-0.29014449670458475-ya229.36100095813583-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Первомайське 1',
    shooting_date: new Date('2021-12-01T00:00:00Z'),
    latitude: 48.0948021,
    longitude: 37.5956557,
    view_mode: '3a',
    yaw: 75.0,
    heading: 45.06,
    tilt: 96.38,
    pano_id: 'AF1QipMbogxfnfgdprTmNFYtnP1raSkeiuFPM0joaEE_',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipMbogxfnfgdprTmNFYtnP1raSkeiuFPM0joaEE_=w900-h600-k-no-pi-6.380799978776068-ya197.05533096814284-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Первомайське 2',
    shooting_date: new Date('2019-10-01T00:00:00Z'),
    latitude: 48.0958861,
    longitude: 37.5930236,
    view_mode: '3a',
    yaw: 75.0,
    heading: 286.28,
    tilt: 84.58,
    pano_id: 'AF1QipMOkJDEgTsvqIc3q_qjLowNplOt4BaiBhU5-RUp',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipMOkJDEgTsvqIc3q_qjLowNplOt4BaiBhU5-RUp=w900-h600-k-no-pi5.418957086670048-ya239.28274323800832-ro0-fo100',
    image_width: 900,
    image_height: 600,
  },
  {
    user_id: 1,
    title: 'Нетайлово',
    shooting_date: new Date('2020-01-01T00:00:00Z'),
    latitude: 48.1086181,
    longitude: 37.548915,
    view_mode: '3a',
    yaw: 75.0,
    heading: 337.12,
    tilt: 77.43,
    pano_id: 'AF1QipNJ5t_utBpsz6HEiiiXRGjBroA4Ngh6oP4qSrzC',
    thumbnail_url:
      'https://lh5.ggpht.com/p/AF1QipNJ5t_utBpsz6HEiiiXRGjBroA4Ngh6oP4qSrzC=w900-h600-k-no-pi12.574658602994404-ya320.1235321022773-ro0-fo100',
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
