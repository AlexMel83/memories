import url from 'url';

export default function (app) {
  app.get('/geosearch/:query', async (req, res) => {
    try {
      const params = new URLSearchParams({
        access_token: process.env.APIKEY_MAPBOX,
        ...url.parse(req.url, true).query,
      });
      const query = req.params.query;
      const result = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?${params}`,
      );
      const data = await result.json();

      if (!data.features[0]) {
        return res.status(404).json({ message: 'Not found' }); // Добавлено return
      }

      return res.status(200).json(data); // Убедитесь, что в любом случае вы возвращаете ответ
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message }); // Добавлено return
    }
  });
}
