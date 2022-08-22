import { load } from 'cheerio';
import got from 'got';

export default async function Fii(ticker = 'abacaxi', type = "all") {

  const fiiUrl = process.env.URL_FII ?? 'https://duckduckgo.com/?q=';
  const selItens = [
    { title: "ticker", selector: "#fund-ticker" },
    { title: "name", selector: "#fund-name" },
    { title: "administrator", selector: "#informations--admin .administrator-name" }, 
    { title: "dividendYield", selector: "#informations--indexes .item:nth-child(1) .value" },
    { title: "lastYield", selector: "#informations--indexes .item:nth-child(2) .value" },
    { title: "equity", selector: "#informations--indexes .item:nth-child(3) .value" },
    { title: "patrimonialValuePerQuota", selector: "#informations--indexes .item:nth-child(4) .value" },
    { title: "currentQuota", selector: "#quotations--infos-wrapper .quotation .value" },
    { title: "min52weeks", selector: "#quotations--infos-wrapper .min52 .value span:nth-child(2)" },
    { title: "max52weeks", selector: "#quotations--infos-wrapper .max52 .value span:nth-child(2)" },
    { title: "valorization12months", selector: "#quotations--infos-wrapper .val12 .value span:first" },
    { title: "typeOfFII", selector: "#informations--basic .wrapper:nth-child(1) .item:nth-child(2) .value" },
    { title: "typeOfANBIMA", selector: "#informations--basic .wrapper:nth-child(1) .item:nth-child(3) .value" },
    { title: "dateOnCVM", selector: "#informations--basic .wrapper:nth-child(1) .item:nth-child(4) .value" },
    { title: "numberOfQuota", selector: "#informations--basic .wrapper:nth-child(2) .item:nth-child(1) .value" },
    { title: "numberOfQuotaHolders", selector: "#informations--basic .wrapper:nth-child(2) .item:nth-child(2) .value" },
    { title: "lastRevenuesTable", selector: "#last-revenues--table tbody tr", 
      childs: [ 
        {title: "dataBase", selector: "td:nth-child(1)"}, 
        {title: "datePayment", selector: "td:nth-child(2)"}, 
        {title: "baseQuotation", selector: "td:nth-child(3)"}, 
        {title: "dividendYield", selector: "td:nth-child(4)"}, 
        {title: "yield", selector: "td:nth-child(5)"},
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

    if ($("#not-found-index").length) return {error: true, message: "ticker not found!"};

    const arrValue = [];
    const jsonObject = {};
    selItens.forEach( item => {
      const {title, selector, childs = false} = item;
      if(childs && type != "all") return;
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
    return {error: true, message: "ticker not found!", err};
  });

  return ret;
};
