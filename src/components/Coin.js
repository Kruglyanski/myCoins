import React from 'react'
import PropTypes from 'prop-types'
import { Image, Table, Header, Loader } from 'semantic-ui-react'

const coin = ({coins, prices, isPricesFetching}) => (

  <Table selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell >Name</Table.HeaderCell>
        <Table.HeaderCell>Image</Table.HeaderCell>
        <Table.HeaderCell>Built On</Table.HeaderCell>
        <Table.HeaderCell>Algorithm</Table.HeaderCell>
        <Table.HeaderCell>Fully Premined</Table.HeaderCell>
        <Table.HeaderCell>Is Trading</Table.HeaderCell>
        <Table.HeaderCell>Pre Mined Value</Table.HeaderCell>
        <Table.HeaderCell>Proof Type</Table.HeaderCell>
        <Table.HeaderCell>Smart Contract Address</Table.HeaderCell>
        <Table.HeaderCell>Symbol</Table.HeaderCell>
        <Table.HeaderCell>Total Coin Supply</Table.HeaderCell>
        <Table.HeaderCell>Price (USD)</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {coins.map(item => {
        const price = prices[item.symbol]
        const priceUSD = price && price.USD
        return (
          <Table.Row key={item.id}>
            <Table.Cell>
              <Header as='h2' textAlign='center'>
                {item.coinName}
              </Header>
            </Table.Cell>
            <Table.Cell singleLine>
              <Image
                fluid
                src={'https://www.cryptocompare.com' + item.imageUrl}
                color="teal"
                style={{
                  width: 50,
                }}
              />
            </Table.Cell>
            <Table.Cell>
              {item.builtOn}
            </Table.Cell>
            <Table.Cell>
              {item.algorithm}
            </Table.Cell>
            <Table.Cell>
              {item.fullyPremined}
            </Table.Cell>
            <Table.Cell>
              {item.isTrading ? 'yes': 'no'}
            </Table.Cell>
            <Table.Cell>
              {item.preMinedValue}
            </Table.Cell>
            <Table.Cell>
              {item.proofType}
            </Table.Cell>
            <Table.Cell>
              {item.smartContractAddress}
            </Table.Cell>
            <Table.Cell>
              {item.symbol}
            </Table.Cell>
            <Table.Cell>
              {item.totalCoinSupply}
            </Table.Cell>
            <Table.Cell>
              {!priceUSD && isPricesFetching
                ? <Loader active inline='centered' />
                : (price !== undefined) ? priceUSD : '-'}
            </Table.Cell>
          </Table.Row>
        )
      })}
    </Table.Body>
  </Table>

)

coin.propTypes = {
  coins: PropTypes.instanceOf(Array),
  prices: PropTypes.instanceOf(Object),
  isPricesFetching:PropTypes.bool,
}

export default coin
