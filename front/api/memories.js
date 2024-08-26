export default function (instance) {
  return {
    async getMemories(queryParams) {
      let url = '/memories';
      if (queryParams && Object.keys(queryParams).length) {
        const queryString = new URLSearchParams(queryParams).toString();
        url += `?${queryString}`;
      }
      return instance.get(url);
    },
    // Добавьте здесь другие методы, специфичные для memories, если они нужны
  };
}
