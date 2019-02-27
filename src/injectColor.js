import getPercentageString from './lib/getPercentageString'
import sigmoid from './lib/sigmoid'
import hsv2rgb from './lib/hsv2rgb'

export default (total, data, options = {}) => {
  const {
    format = 'hash',
    satBase = 28,
    satRange = 20,
    lumBase = 62,
    lumRange = 20
  } = options

  return data.map((segment, index) => {
    // generate Hue value from segment.label
    const labelHash = segment.label
      .split('')
      .reduce((res, char) => res + char.charCodeAt(0), 0)
    const hue = labelHash % 360
    const sat =
      satBase + satRange * sigmoid(parseFloat(getPercentageString(total, segment.value)))
    const lum = ((labelHash * index) % lumRange) + lumBase
    const [r, g, b] = hsv2rgb(hue, sat, lum)
    return {
      ...segment,
      color: format === 'hash' ?
        `#${r.toString(16)}${g.toString(16)}${b.toString(16)}` :
        `rgb(${r}, ${g}, ${b})`
    }
  })
}

