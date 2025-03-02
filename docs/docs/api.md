---
sidebar_position: 2
---

# API integration details

Let's discover **The integration of API**.

Data is fetched using axios.

Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.

## API used

- [CoinCap](https://docs.coincap.io/)
- I hit get request on https://api.coincap.io/v2/assets?limit=5 to get latest data of 5 currencies

## Fetching of data and updating

- A function fetchData() is created in the api/cryptoapi.js file where I am calling this GET request
- It returns the destructured data as a Promise.
- Then a getData() function is created in the page.js page to get the data and store it.
- It is then stored in our Context for our state management.
- For updating, a Refresh button is implemented, when we click on it, getData() is called and we get updated prices of the currencies.
