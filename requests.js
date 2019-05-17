const axios = require('axios');

const promises = [];

for (let i = 0; i <= 50; i++) {
  promises.push(axios.post('https://pocnodemyway.appspot.com/api/people', {
    "name": "Elias",
    "age": 20,
    "genre": "Masculino",
    "user": "elias.reis",
    "password": "elias.reis",
    "CPF": "424.071.208-41",
    "email": "elias.reis@dextra-sw.com",
    "RG": "41.805.804-0",
    "fullAddress": "asdfasdfasdfasdfasdfasdfad",
    "RoleId": 1,
    "TeamId": 1
  }))
}

try {
  const start = new Date();
  console.log(start)
  Promise.all(promises)
    .then(() => {
      const finish = new Date();
      console.log(finish)
      console.log(finish-start);
    })
    .catch(e => console.error(e.data));
} catch (e) {
  console.log(e.data)
}

