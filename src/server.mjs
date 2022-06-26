import http from 'http';
import express from 'express';
import Fii from './api/Fii.mjs'

// console.log(process.env);

const router = express();

/** Parse the request */
router.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
router.use(express.json());

/** RULES OF OUR API */
router.use((req, res, next) => {
  // set the CORS policy
  res.header('Access-Control-Allow-Origin', '*');
  // set the CORS headers
  res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
  // set the CORS method headers
  if (req.method !== 'GET') {
      res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
      return res.status(200).json({});
  }
  next();
});

router.get('/', async (req, res, next) => {
  // get some posts
  return res.status(200).json({
    message: "Tudo certo!"
  });
});

router.get('/:ticker', async (req, res, next) => {
  // get the post ticker from the req
  const ticker = req.params.ticker;
  const ret = await Fii(ticker);
  // get some posts
  return res.status(200).json({
    ticker,
    ret
  });
});

/** Error handling */
router.use((req, res, next) => {
  const error = new Error('not found');
  return res.status(404).json({
    message: error.message
  });
});

/** Server */
const httpServer = http.createServer(router);
const PORT = process.env.PORT ?? 3456;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
