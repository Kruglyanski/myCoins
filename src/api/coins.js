export default {
  apiGetCoins: () => {
    return (
     fetch('https://min-api.cryptocompare.com/data/all/coinlist', {
       method: 'GET',
       headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json',
       },
     }).then(response => response.json()))
   }
}
