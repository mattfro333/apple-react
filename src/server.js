import express from 'express';
import config from './config';
// import serverRender from './components/renderers/serv';
// import { data } from './testData';

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});
// app.get('/', async (req, res) => {
//   const initialContent = await serverRender();
//   res.render('index', { ...initialContent });
// });

// app.get('/data', (req, res) => {
//   res.send(data);
// });

app.listen(config.port, function listenHandler() {
  console.info(`Running on ${config.port}...`);
});
