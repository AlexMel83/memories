export default function (instance) {
  return {
    async getMemories(queryParams) {
      // console.log('API object:', instance);
      let url = '/memories';
      if (queryParams && Object.keys(queryParams).length) {
        const queryString = new URLSearchParams(queryParams).toString();
        url += `?${queryString}`;
      }
      return instance.get(url);
    },
  };
}
