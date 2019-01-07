export default coin => {
  return {

    algorithm: coin.Algorithm,
    builtOn: coin.BuiltOn,
    coinName: coin.CoinName,
    fullName: coin.FullName,
    fullyPremined: coin.FullyPremined,
    id: coin.Id,
    imageUrl: coin.ImageUrl,
    isTradingd: coin.IsTrading,
    name: coin.Name,
    preMinedValue: coin.PreMinedValue,
    proofType: coin.ProofType,
    smartContractAddress: coin.SmartContractAddress,
    sortOrder: coin.SortOrder,
    sponsored: coin.Sponsored,
    symbol: coin.Symbol,
    totalCoinSupply: coin.TotalCoinSupply,
    totalCoinsFreeFloat: coin.TotalCoinsFreeFloat,
    url: coin.Url
  }
}
