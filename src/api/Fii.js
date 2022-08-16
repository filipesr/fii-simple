import { load } from 'cheerio';
import got from 'got';

export default async function Fii(ticker = 'abacaxi', type = "all") {

  const fiiUrl = process.env.URL_FII ?? 'https://duckduckgo.com/?q=';
  const selItens = [
    { title: "Ticker", selector: "#fund-ticker" },
    { title: "Name", selector: "#fund-name" },
    { title: "Administrator", selector: "#informations--admin .administrator-name" }, 
    { title: "DividendYield", selector: "#informations--indexes .item:nth-child(1) .value" },
    { title: "LastYield", selector: "#informations--indexes .item:nth-child(2) .value" },
    { title: "Equity", selector: "#informations--indexes .item:nth-child(3) .value" },
    { title: "PatrimonialValuePerQuota", selector: "#informations--indexes .item:nth-child(4) .value" },
    { title: "CurrentQuota", selector: "#quotations--infos-wrapper .quotation .value" },
    { title: "Min52weeks", selector: "#quotations--infos-wrapper .min52 .value span:nth-child(2)" },
    { title: "Max52weeks", selector: "#quotations--infos-wrapper .max52 .value span:nth-child(2)" },
    { title: "Valorization12months", selector: "#quotations--infos-wrapper .val12 .value span:first" },
    { title: "TypeOfFII", selector: "#informations--basic .wrapper:nth-child(1) .item:nth-child(2) .value" },
    { title: "TypeOfANBIMA", selector: "#informations--basic .wrapper:nth-child(1) .item:nth-child(3) .value" },
    { title: "DateOnCVM", selector: "#informations--basic .wrapper:nth-child(1) .item:nth-child(4) .value" },
    { title: "NumberOfQuota", selector: "#informations--basic .wrapper:nth-child(2) .item:nth-child(1) .value" },
    { title: "NumberOfQuotaHolders", selector: "#informations--basic .wrapper:nth-child(2) .item:nth-child(2) .value" },
  ];

  const ret = await got(`${fiiUrl}${ticker}`).then(response => {
    const $ = load(response.body);

    const arrValue = [];
    const jsonObject = {};
    selItens.forEach( item => {
      const itemValue = $(item.selector).text();
      arrValue[arrValue.length] = itemValue;
      jsonObject[item.title] = itemValue;
    })

    if(type == "values") return arrValue;
    if(type == "csv") return arrValue.join(";");

    return jsonObject;

  }).catch(err => {
    return err;
  });

  return ret;
};
