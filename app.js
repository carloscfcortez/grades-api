import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { logger } from './config/logger.js';
// import { db } from './models/index.js';
import {gradeRouter} from './routes/gradeRouter.js';

const PORT = process.env.PORT || 5000

// (async () => {
//   try {
//     await db.mongoose.connect(db.url, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log(`Conectado com sucesso!`)
//   } catch (error) {
//     console.log(`error ao conectar ao mongodb`)
//     process.exit();
//   }
// })();

const app = express();

//define o dominio de origem para consumo do servico
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get('/', (req, res) => {
  logger.info('req')
  res.send('API em execucao');
});

app.use(gradeRouter);

app.listen(PORT, () => {
  console.log(`Running api on http://localhost:${PORT}`)
});
