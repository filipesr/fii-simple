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
    { title: "lastRevenuesTable", selector: "#last-revenues--table tbody tr", 
      childs: [ 
        {title: "DataBase", selector: "td:nth-child(1)"}, 
        {title: "DatePayment", selector: "td:nth-child(2)"}, 
        {title: "BaseQuotation", selector: "td:nth-child(3)"}, 
        {title: "DY", selector: "td:nth-child(4)"}, 
        {title: "Dividend", selector: "td:nth-child(5)"},
      ]
    },
    { title: "news", selector: "#news--wrapper ul li", 
      childs: [ 
        {title: "date", selector: ".date"}, 
        {title: "text", selector: ".title"}, 
        {title: "link", selector: "a:not(.nolink)", attr: "href"}, 
      ]
    },
  ];

  const ret = await got(`${fiiUrl}${ticker}`).then(response => {
    const $ = load(response.body);

    const arrValue = [];
    const jsonObject = {};
    selItens.forEach( item => {
      const {title, selector, childs = false} = item;
      jsonObject[title] = [];
      $(selector).each((indexElem, elem) => {
        // console.log(title, indexElem);
        // jsonObject[title][index] = $(elem).find('td:first').text();
        const tmpObj = {};

        if ( childs ) {
          childs.forEach((child) => {
            const {selector: filterChild, title: titleChild, attr = false} = child;
            tmpObj[titleChild] = attr 
              ? $(elem).find(filterChild).attr(attr) 
              : $(elem).find(filterChild).text();
          })
          jsonObject[title][indexElem] = tmpObj;
        } else {
          const itemValue = $(elem).text();
          jsonObject[title] = itemValue;
          arrValue.push(itemValue);
        }
      })
    })
    
    if(type == "values") return arrValue;
    if(type == "csv") return arrValue.join(";");

    return jsonObject;

  }).catch(err => {
    return err;
  });

  return ret;
};
