import Decimal from 'decimal.js'

/**
 * @param total - sum up of all input values
 * @param value - value of the segment
 * @returns number string with toFixed 2
 */
export default (total, value) =>
  new Decimal(value)
    .times(new Decimal(100))
    .dividedBy(new Decimal(total))
    .toFixed(2)