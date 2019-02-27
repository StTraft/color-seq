import Decimal from 'decimal.js'

/**
 * 
 * @param x
 * @returns x:0 y:0.5 -- x:10 y:1
 */
const sigmoid = x =>
  parseFloat(
    new Decimal(1)
      .dividedBy(new Decimal(1).plus(new Decimal(x).neg().exp()))
      .toFixed(4)
  )

export default x =>
  parseFloat(
    new Decimal(sigmoid(x))
      .minus(new Decimal(0.5))
      .times(2)
      .toFixed(4)
  )
