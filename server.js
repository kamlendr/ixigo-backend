const db = require('./src/Config/db');
const app = require('./app');

let server = async () => {
  await db();
  console.log('databse connected');
  app.listen(8080, () => console.log('server started'));
};
server();
