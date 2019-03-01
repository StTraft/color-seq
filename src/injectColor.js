import getPercentageString from './lib/getPercentageString'
import sigmoid from './lib/sigmoid'
import hsv2rgb from './lib/hsv2rgb'
import Decimal from 'decimal.js'

export default (total, data, options = {}) => {
  const {
    format = 'hash',
    satBase = 18,
    satRange = 31,
    lumBase = 54,
    lumRange = 41,
    inject = true,
  } = options

  return data.map((segment, index, ctx) => {
    // generate Hue value from segment.label
    const labelHash = segment.label
      .split('')
      .reduce((res, char) => res + char.charCodeAt(0), 0)
    const hue = labelHash % 360
    const sat =
      satBase +
      satRange * sigmoid(parseFloat(getPercentageString(total, segment.value)))
    const lum = parseFloat(Decimal.sin(Math.PI * index / (ctx.length/3) ).times(lumRange).plus(lumBase).toFixed(2))
    // const lum = ((labelHash * index) % lumRange) + lumBase
    const [r, g, b] = hsv2rgb(hue, sat, lum)
    return inject
      ? {
          ...segment,
          color:
            format === 'hash'
              ? `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`
              : `rgb(${r}, ${g}, ${b})`,
        }
      : {
          color:
            format === 'hash'
              ? `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`
              : `rgb(${r}, ${g}, ${b})`,
        }
  })
}
