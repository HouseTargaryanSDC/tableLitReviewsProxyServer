const axios = require('axios');
const proxy = require('./proxy.js');

const PORT = 9000;

proxy.get('/api/reviews/all/:restaurantId', (req, res) => {
  console.log('proxy get reviews all');
  const { restaurantId } = req.params;
  axios.get(`http://54.193.70.16:80/api/reviews/all/${restaurantId}`)
  // axios.get(`http://3.86.82.182:9001/api/reviews/all/${restaurantId}`)
    .then(({data}) => {
      res.status(200).send(data);
    });
});

proxy.get('/api/reviews/summary/:restaurantId', (req, res) => {
  const { restaurantId } = req.params;
  axios.get(`http://54.193.70.16:80/api/reviews/summary/${restaurantId}`)
  // axios.get(`http://3.86.82.182:9001/api/reviews/summary/${restaurantId}`)
    .then(({data}) => {
      res.status(200).send(data);
    });
});

proxy.post('/api/reviews/all/:restaurantId', (req, res) => {
  const { body } = req;
  const { restaurantId } = req.params;
  axios.post(`http://54.193.70.16:80/api/reviews/all/${restaurantId}`, body)
  .then(() => {
    res.status(201).send('post successful')
  })
  .catch((err) => {
    console.log('error posting', err);
    res.status(500).send('error posting!');
  });
});

proxy.get('/api/nav/:metro', (req, res) => {
  const { metro } = req.params;
  axios.get(`http://127.0.0.1:9004/api/nav/${metro}`)
  // axios.get(`http://3.86.82.182:9004/api/nav/${metro}`)
    .then(({data}) => {
      res.status(200).send(data);
    });
});

proxy.get('/api/search/:searched', (req, res) => {
  const { searched } = req.params;
  axios.get(`http://127.0.0.1:9004/api/search/${searched}`)
  // axios.get(`http://3.86.82.182:9004/api/search/${searched}`)
    .then(({data}) => {
      res.status(200).send(data);
    });
});

proxy.get('/api/menus/:rest_id', (req, res) => {
  console.log('proxy menu get request');
  const { rest_id } = req.params;
  axios.get(`http://127.0.0.1:9003/api/menus/${rest_id}`)
  // axios.get(`http://3.86.82.182:9003/api/menus/${rest_id}`)
    .then(({data}) => {
      res.status(200).send(data);
    });
});

proxy.get('/api/restaurant', (req, res) => {
  axios.get(`http://127.0.0.1:9002/api/restaurant`, {params: {id: 2}})
  // axios.get(`http://3.86.82.182:9002/api/restaurant`, {params: {id: 2}})
    .then(({data}) => {
      res.status(status).send(data);
    });
});

proxy.listen(PORT, () => {
  console.log('Proxy listening on PORT ', PORT);
});
