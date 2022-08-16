import http from 'http';
import express from 'express';
import jsonxml from 'jsontoxml'

import Fii from './api/Fii.js'

// console.log(process.env);

const router = express();

/** Parse the request */
router.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
router.use(express.json());

router.get('/', async (req, res, next) => {
  // get some posts
  return res.status(200).json({
    message: "Tudo certo!"
  });
});

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
  // APP_KEY
  const token = req.headers['x-access-token'] || req.headers['authorization'];
  if (`Bearer ${process.env.APP_KEY}` !== token){
    return res.status(401).json({
      success: false,
      message: 'Token is not valid',
      token
    });
  }

  next();
});

router.get('/csv/:ticker', async (req, res, next) => {
  // get the post ticker from the req
  const ticker = req.params.ticker;
  const ret = await Fii(ticker, "csv");
  // get some posts
  return res.status(200).send(ret);
});

router.get('/xml/:ticker', async (req, res, next) => {
  // get the post ticker from the req
  const ticker = req.params.ticker;
  const data = await Fii(ticker);
  //Converting JSON result to XML  
  const xml = jsonxml(  
    { data },
    { 
      removeIllegalNameCharacters: true,
      xmlHeader: true,
    }
  );  
  // get some posts
  return res.status(200).header("Content-Type", "application/xml").send(xml);
});

router.get('/values/:ticker/:pos', async (req, res, next) => {
  // get the post ticker from the req
  const {ticker, pos = 2} = req.params;
  const ret = await Fii(ticker, "values");
  // get some posts
  return res.status(200).send(ret[pos]);
});

router.get('/:ticker', async (req, res, next) => {
  // get the post ticker from the req
  const ticker = req.params.ticker;
  const data = await Fii(ticker);
  // get some posts
  return res.status(200).json({
    ticker,
    data
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
