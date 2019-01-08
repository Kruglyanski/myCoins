export default {
  apiGetPrice: () => {
    return (
     fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BTCD&tsyms=USD', {
       method: 'GET',
       headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json',
       },
     }).then(response => response.json()))
   }
}
