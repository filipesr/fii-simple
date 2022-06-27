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
	"ret": {
		"Dividend Yield": "1,71%",
		"Último Rendimento": "R$1,72",
		"Patrimônio Líquido": "R$2,31 B",
		"Valor Patrimonial por Cota": "R$95,25",
		"fund-ticker": "RECR11",
		"fund-name": "REC Recebíveis Imobiliários"
	}
}
```
## call on http://localhost:3000/csv/RECR11
```
#return: 
1,71%;R$1,72;R$2,31 B;R$95,25
```
## call on http://localhost:3000/xml/RECR11
```
#return: 
<?xml version="1.0" encoding="utf-8"?>
<data>
	<Dividend_Yield>1,71%</Dividend_Yield>
	<Último_Rendimento>R$1,72</Último_Rendimento>
	<Patrimônio_Líquido>R$2,31 B</Patrimônio_Líquido>
	<Valor_Patrimonial_por_Cota>R$95,25</Valor_Patrimonial_por_Cota>
	<fund-ticker>RECR11</fund-ticker>
	<fund-name>REC Recebíveis Imobiliários</fund-name>
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
