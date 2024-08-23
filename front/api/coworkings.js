export default function (instance) {
  return {
    getCoworkings(searchQuery) {
      let url = '/coworkings';
      if (searchQuery) {
        url += `?name=${searchQuery}`;
      }
      return instance.get(url);
    },

    getReviews(coworkingId) {
      return instance.get(`/reviews?coworkingId=${coworkingId}`);
    },

    getAdvantages(coworkingId) {
      if (coworkingId) {
        return instance.get(`/advantages?coworkingId=${coworkingId}`);
      } else {
        return instance.get('/advantages');
      }
    },
  };
}
