// useFallbackReviews.js
import { ref } from 'vue';

export default function useFallbackReviews() {
  const fallbackReviews = ref({
    1: [
      {
        id: 1,
        name: 'Іван',
        rating: 5,
        content: 'Чудове місце! Великий плюс - є парковка',
        updated_at: '2023-04-01',
      },
      {
        id: 2,
        name: 'Марія Іваненко',
        rating: 4,
        content:
          'Працюю в коворкінгу з самого відкриття та залишаюсь задоволенною.',
        updated_at: '2024-02-21',
      },
    ],
    2: [
      {
        id: 3,
        name: 'Олексій Коваленко',
        rating: 4,
        content: 'Добре, але могло бути краще.',
        updated_at: '2023-03-11',
      },
    ],
    3: [
      {
        id: 4,
        name: 'Олена Козак',
        rating: 5,
        content: 'Супер, рекомендую!',
        updated_at: '2023-04-01',
      },
      {
        id: 5,
        name: 'Тарас',
        rating: 4,
        content: 'Гарний сервіс.',
        updated_at: '2024-05-01',
      },
    ],
    4: [
      {
        id: 6,
        name: 'Людмила Сидоренко',
        rating: 4,
        content: 'Дуже задоволена. Гарне місце, чудовий сервіс',
        updated_at: '2022-06-01',
      },
      {
        id: 7,
        name: 'Петро',
        rating: 3,
        content: 'Непогано, але є недоліки.',
        updated_at: '2023-07-01',
      },
      {
        id: 8,
        name: 'Наталія Гончарова',
        rating: 5,
        content: 'Відмінне місце для роботи.',
        updated_at: '2023-08-01',
      },
    ],
    5: [
      {
        id: 9,
        name: 'Олександр',
        rating: 4,
        content: 'Є куди прагнути.',
        updated_at: '2023-09-01',
      },
    ],
    6: [
      {
        id: 10,
        name: 'Катерина Бондар',
        rating: 5,
        content: 'Дуже подобається.',
        updated_at: '2023-10-02',
      },
      {
        id: 11,
        name: 'Віктор',
        rating: 5,
        content: 'Відмінно.',
        updated_at: '2024-11-01',
      },
    ],
  });

  const getFallbackReviews = (coworkingId) => {
    return fallbackReviews.value[coworkingId] || [];
  };

  return {
    getFallbackReviews,
  };
}
