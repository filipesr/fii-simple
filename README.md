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
		"ticker": "RECR11",
		"name": "REC Recebíveis Imobiliários",
		"administrator": "BRL Trust DTVM",
		"dividendYield": "1,07%",
		"lastYield": "R$1,02",
		"equity": "R$2,52 B",
		"patrimonialValuePerQuota": "R$95,45",
		"currentQuota": "95,00",
		"min52weeks": "90,20",
		"max52weeks": "106,40",
		"valorization12months": "8,21",
		"typeOfFII": "Papel: CRIs",
		"typeOfANBIMA": "Títulos e Valores Mobiliários Gestão Ativa",
		"dateOnCVM": "21/07/2017",
		"numberOfQuota": "26.441.650",
		"numberOfQuotaHolders": "172.375",
		"lastRevenuesTable": [
			{
				"dataBase": "05.08.2022",
				"datePayment": "12.08.2022",
				"baseQuotation": "R$ 96,55",
				"dividendYield": "1,06 %",
				"yield": "R$ 1,021"
			},
			{
				"dataBase": "07.07.2022",
				"datePayment": "14.07.2022",
				"baseQuotation": "R$ 100,30",
				"dividendYield": "1,15 %",
				"yield": "R$ 1,150"
			},
			{
				"dataBase": "07.06.2022",
				"datePayment": "14.06.2022",
				"baseQuotation": "R$ 102,00",
				"dividendYield": "1,69 %",
				"yield": "R$ 1,721"
			},
			{
				"dataBase": "06.05.2022",
				"datePayment": "13.05.2022",
				"baseQuotation": "R$ 100,02",
				"dividendYield": "1,50 %",
				"yield": "R$ 1,502"
			},
			{
				"dataBase": "07.04.2022",
				"datePayment": "14.04.2022",
				"baseQuotation": "R$ 101,90",
				"dividendYield": "1,34 %",
				"yield": "R$ 1,368"
			},
			{
				"dataBase": "08.03.2022",
				"datePayment": "15.03.2022",
				"baseQuotation": "R$ 100,35",
				"dividendYield": "1,19 %",
				"yield": "R$ 1,196"
			},
			{
				"dataBase": "07.02.2022",
				"datePayment": "14.02.2022",
				"baseQuotation": "R$ 102,80",
				"dividendYield": "1,02 %",
				"yield": "R$ 1,050"
			},
			{
				"dataBase": "07.01.2022",
				"datePayment": "14.01.2022",
				"baseQuotation": "R$ 100,98",
				"dividendYield": "1,44 %",
				"yield": "R$ 1,456"
			},
			{
				"dataBase": "07.12.2021",
				"datePayment": "14.12.2021",
				"baseQuotation": "R$ 98,20",
				"dividendYield": "1,20 %",
				"yield": "R$ 1,181"
			},
			{
				"dataBase": "08.11.2021",
				"datePayment": "16.11.2021",
				"baseQuotation": "R$ 100,65",
				"dividendYield": "1,07 %",
				"yield": "R$ 1,081"
			}
		],
		"news": [
			{
				"date": "15.08.22",
				"text": "Informe Trimestral - 30/06/2022",
				"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=340103&amp;flnk"
			},
			{
				"date": "11.08.22",
				"text": "Esclarecimentos de consulta B3 / CVM - 11/08/2022",
				"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=336837&amp;flnk"
			},
			{
				"date": "11.08.22",
				"text": "Informe Mensal - 07/2022",
				"link": "http://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=336371&amp;flnk"
			},
			{
				"date": "05.08.22",
				"text": "Relatorio Gerencial - 29/07/2022",
				"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=333881&amp;flnk"
			},
			{
				"date": "05.08.22",
				"text": "Informou distribuição de:Rendimento no valor de R$ 1,0205 por cota no dia 12/08/2022Data base: 05/08/2022 Fechamento: R$ 96,55 Rendimento%: 1,057"
			},
			{
				"date": "05.08.22",
				"text": "Aviso aos Cotistas - 05/08/2022",
				"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=333833&amp;flnk"
			},
			{
				"date": "15.07.22",
				"text": "Informe Mensal - 06/2022",
				"link": "http://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=326918&amp;flnk"
			},
			{
				"date": "07.07.22",
				"text": "Informou distribuição de:Rendimento no valor de R$ 1,15 por cota no dia 14/07/2022Data base: 07/07/2022 Fechamento: R$ 100,30 Rendimento%: 1,147"
			},
			{
				"date": "07.07.22",
				"text": "Relatorio Gerencial - 30/06/2022",
				"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=323236&amp;flnk"
			},
			{
				"date": "07.07.22",
				"text": "Aviso aos Cotistas - 07/07/2022",
				"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=323223&amp;flnk"
			},
			{
				"date": "20.06.22",
				"text": "Informe Mensal - 05/2022 (R)",
				"link": "http://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=317447&amp;flnk"
			},
			{
				"date": "15.06.22",
				"text": "Informe Mensal - 05/2022",
				"link": "http://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=316332&amp;flnk"
			},
			{
				"date": "08.06.22",
				"text": "Perfil do Fundo Estruturado - 07/06/2022",
				"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=312636&amp;flnk"
			},
			{
				"date": "08.06.22",
				"text": "Liberacao de Negociacao das Cotas - 07/06/2022",
				"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=312629&amp;flnk"
			},
			{
				"date": "08.06.22",
				"text": "Comunicado nao Fato Relevante - 07/06/2022(N)",
				"link": "https://fnet.bmfbovespa.com.br/fnet/publico/exibirDocumento?id=312269&amp;flnk"
			}
		]
	}
}
```
## call on http://localhost:3000/csv/RECR11
```
#return: 
RECR11;REC Recebíveis Imobiliários;BRL Trust DTVM;1,07%;R$1,02;R$2,52 B;R$95,45;95,00;90,20;106,40;8,21;Papel: CRIs;Títulos e Valores Mobiliários Gestão Ativa;21/07/2017;26.441.650;172.375
```
## call on http://localhost:3000/xml/RECR11
```
#return: 
<?xml version="1.0" encoding="utf-8"?>
<data>
	<ticker>RECR11</ticker>
	<name>REC Recebíveis Imobiliários</name>
	<administrator>BRL Trust DTVM</administrator>
	<dividendYield>1,07%</dividendYield>
	<lastYield>R$1,02</lastYield>
	<equity>R$2,52 B</equity>
	<patrimonialValuePerQuota>R$95,45</patrimonialValuePerQuota>
	<currentQuota>95,00</currentQuota>
	<min52weeks>90,20</min52weeks>
	<max52weeks>106,40</max52weeks>
	<valorization12months>8,21</valorization12months>
	<typeOfFII>Papel: CRIs</typeOfFII>
	<typeOfANBIMA>Títulos e Valores Mobiliários Gestão Ativa</typeOfANBIMA>
	<dateOnCVM>21/07/2017</dateOnCVM>
	<numberOfQuota>26.441.650</numberOfQuota>
	<numberOfQuotaHolders>172.375</numberOfQuotaHolders>
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
