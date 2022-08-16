fsrezende.com.br
======
**fii-simple** is a api to scrap FII stocks
======
* fill URL_FII property with url to load data

## call on http://localhost:3000/RECR11
```
#return: 
{
	"ticker": "RECR11",
	"data": {
		"Ticker": "RECR11",
		"Name": "REC Recebíveis Imobiliários",
		"Administrator": "BRL Trust DTVM",
		"DividendYield": "1,08%",
		"LastYield": "R$1,02",
		"Equity": "R$2,52 B",
		"PatrimonialValuePerQuota": "R$95,45",
		"CurrentQuota": "94,39",
		"Min52weeks": "90,20",
		"Max52weeks": "106,40",
		"Valorization12months": "8,63",
		"TypeOfFII": "Papel: CRIs",
		"TypeOfANBIMA": "Títulos e Valores Mobiliários Gestão Ativa",
		"DateOnCVM": "21/07/2017",
		"NumberOfQuota": "26.441.650",
		"NumberOfQuotaHolders": "172.375"
	}
}
```
## call on http://localhost:3000/csv/RECR11
```
#return: 
RECR11;REC Recebíveis Imobiliários;BRL Trust DTVM;1,08%;R$1,02;R$2,52 B;R$95,45;94,39;90,20;106,40;8,63;Papel: CRIs;Títulos e Valores Mobiliários Gestão Ativa;21/07/2017;26.441.650;172.375
```
## call on http://localhost:3000/xml/RECR11
```
#return: 
<?xml version="1.0" encoding="utf-8"?>
<data>
	<Ticker>SRVD11</Ticker>
	<Name>Serra Verde</Name>
	<Administrator>Vórtx DTVM LTDA</Administrator>
	<DividendYield>2,57%</DividendYield>
	<LastYield>R$0,20</LastYield>
	<Equity>R$71,73 M</Equity>
	<PatrimonialValuePerQuota>R$0,75</PatrimonialValuePerQuota>
	<CurrentQuota>7,79</CurrentQuota>
	<Min52weeks>7,00</Min52weeks>
	<Max52weeks>10,00</Max52weeks>
	<Valorization12months>19,11</Valorization12months>
	<TypeOfFII>Indefinido</TypeOfFII>
	<TypeOfANBIMA>Títulos e Valores Mobiliários Gestão Ativa</TypeOfANBIMA>
	<DateOnCVM>--/--/--</DateOnCVM>
	<NumberOfQuota>96.286.021</NumberOfQuota>
	<NumberOfQuotaHolders>92</NumberOfQuotaHolders>
</data>
```
## Technology
* [Cheerio](https://cheerio.js.org/)
* [Got](https://github.com/sindresorhus/got)
* [Express](https://expressjs.com/)
* [jsontoxml](https://github.com/soldair/node-jsontoxml/)

## Contact
* Homepage: [fsrezende.com.br](https://fsrezende.com.br/)
* e-mail: fsr.trabalho@gmail.com
* Linkedin: [fsrezende](https://www.linkedin.com/in/fsrezende)
