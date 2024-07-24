# Market Tracker Planning

## Dependencies

x = installed

Front End:

-   Front end:
-   @appolo/client - required
-   x@reduxjs/toolkit
-   formik - simplify forms in conjunction with yup \*potentially slow
-   graphql -required
-   jwt-decode -required
-   xreact - required
-   xreact-dom - required
-   xreact-router-dom - required
-   recharts - charts and graphs
-   yup - form validation against schema on front end

Components:

-   x@mui/icons-material?
-   x@mui/material?
-   x@mui/x-data-grid?

Back End:

-   x@apollo/server
-   xbcrypt or argon2
-   xcors - prevent unauthorized access from different origins
-   xdotenv - requiredish
-   xexpress - required
-   xgraphql - required
-   helmet - improve security
-   xjsonwebtoken - required
-   xmongoose - required
-   morgan - logging http requests
-   stripe - payments

## Planning Management

[Trello](https://trello.com/b/8SAtNZFj/market-tracker) Tasks management

[Miro](https://miro.com/welcome/akxoTm1hZmQ1SlhCNks2REw5TGRPcnJENzFMUE14OTlzenpOb2tFekZwcExtZHB6ODNwS2tOMlRKZGs3ZHZoSXwzNDU4NzY0NTk0ODY3OTIwMDk4fDQ=?share_link_id=471248188978) Database Models

[Figma]() For visual model of the project

## Potential Third Party Apis

x = Good, xx = Possible, xxx = Poor.

x$ Aletheia Insider trading data, earnings call analysis, financial statements, and more
xxx Alpha Vantage Realtime and historical stock data
xxx apilayer marketstack Real-Time, Intraday & Historical Market Data API
xx Finage Finage is a stock, currency, cryptocurrency, indices, and ETFs real-time & historical data provider
x Financial Modeling Prep Realtime and historical stock data
x Finnhub Real-Time RESTful APIs and Websocket for Stocks, Currencies, and Crypto
xxx Hotstoks Stock market data powered by SQL
x IEX Cloud Realtime & Historical Stock and Market Data
xx OpenFIGI Equity, index, futures, options symbology from Bloomberg LP
xxx Real Time Finance Websocket API to access realtime stock data
xTwelve Data Stock market data (real-time & historical)
xx Yahoo Finance Real time low latency Yahoo Finance API for stock market, crypto currencies, and currency exchange

Response {
status: 200,
statusText: 'OK',
headers: Headers {
date: 'Wed, 24 Jul 2024 04:58:57 GMT',
'content-type': 'application/json; charset=utf-8',
'transfer-encoding': 'chunked',
connection: 'keep-alive',
'access-control-allow-credentials': 'true',
'access-control-allow-headers': 'Content-Type, Accept-Encoding, Authorization, Accept, Origin, X-Requested-With, X-CSRF-TOKEN',
'access-control-allow-methods': 'GET, OPTIONS',
'access-control-allow-origin': '\*',
'api-credits-left': '7',
'api-credits-used': '1',
'api-source-node': 'D3.3',
'cf-cache-status': 'DYNAMIC',
'report-to': '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v4?s=2KE8eY6LQy%2FSV9Bweb%2BD1C2FLA%2Bv2XzzobDhteJNWoffHv%2BMvnDssgl2VZ6pdcU4Bbjrw9dLzd0fJ6Fx%2BfP%2Fvz9MRmYsqSrqdrEVff99QVKEqV6hvDgccYxJXnK3xErT1%2F0MuQ%3D%3D"}],"group":"cf-nel","max_age":604800}',
nel: '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
server: 'cloudflare',
'cf-ray': '8a81568559cf55f2-ADL',
'content-encoding': 'br'
},
body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },
bodyUsed: false,
ok: true,
redirected: false,
type: 'basic',
url: 'https://api.twelvedata.com/time_series?apikey=xxxxxxxxx&interval=1month&symbol=AAPL&end_date=2024-07-23%2019:03:00&start_date=2014-07-23%2019:03:00&format=JSON'
}
