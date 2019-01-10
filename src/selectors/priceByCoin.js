import { createSelector } from 'reselect'
import * as  _  from 'lodash'
import {getPricesList} from './prices'

export const getPriceByCoin = symbol => createSelector(getPricesList, prices => (
  _.find(prices, function(i) {

    return i.symbol === symbol

  })
 )
)


