export default {
  apiGetPrice: (endpoint) => {
    return (
      fetch(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${endpoint}&tsyms=USD`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then(response => response.json()))
  },
}
