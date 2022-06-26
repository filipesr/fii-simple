import { load } from 'cheerio';
import got from 'got';

export default async function Fii(ticker = 'abacaxi') {

  const fiiUrl = process.env.URL_FII ?? 'https://duckduckgo.com/?q=';
  const selTicker = "#fund-ticker";
  const selName = "#fund-name";
  const selProp = "#informations--indexes .title";
  const selValue = "#informations--indexes .value";

  const ret = await got(`${fiiUrl}${ticker}`).then(response => {
    const $ = load(response.body);

    const arrProp = [];
    $(selProp).each((i, elem) => {
      arrProp[i] = $(elem).text();
    });

    const arrValue = [];
    $(selValue).each((i, elem) => {
      arrValue[i] = $(elem).text();
    });

    const jsonObject = arrProp.reduce((result, item, index) => {
      result[item] = arrValue[index];
      return result
    }, {})

    jsonObject["fund-ticker"] = $(selTicker).text();
    jsonObject["fund-name"] = $(selName).text();

    return jsonObject;

  }).catch(err => {
    return err;
  });

  return ret;
};
