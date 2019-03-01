import cs, { getPercentageString } from 'color-sequences'
import * as Faker from 'faker'
import * as fs from 'fs'
import * as path from 'path'

const htmlPath = path.resolve(__dirname, '../', 'public', 'index.html')
const cssPath = path.resolve(__dirname, '../', 'public', 'style.css')
const trial = 1000
const unit = 10
const maxValue = 1000

const testTrials = new Array(trial).fill(0).map((t, i) => {

  const data = new Array(unit).fill(0).map(d => {
    return {
      label: Faker.internet.email(),
      // label: Faker.name.findName(),
      value: Math.floor(Math.random() * maxValue)
    }
  })

  return cs(unit * maxValue, data, { inject: false, satBase: 18, satRange: 29, lumBase: 54, lumRange: 41 })

})
// console.log(testTrials)

const cssString = testTrials.reduce((res, row, i) => {
  return res + row.reduce((re, col, j) => {
    return re + `div.row-${i + 1} div.col-${j + 1} { background: ${col.color}; flex: 0 0 50px; height: 50px; color: #fff; line-height: 50px; text-align: center;}\n`
  }, '')
}, '[class*="row"] {display: flex; flex-flow: row-nowrap;height: 50px;width:500px;}\n')

const divs = testTrials.reduce((res, row, i) => {
  const rowStr = `<h4>row ${i + 1}</h4><div class="row-${i + 1}">%%replace%%</div>\n`
  const colsStr = row.reduce((re, col, j) => {
    return re + `<div class="col-${j + 1}">T-${j + 1}</div>`
  }, '')
  return res + rowStr.replace('%%replace%%', colsStr)
}, '')

const html = `<html><head><style>${cssString}</style></head><body><h1>Color test</h1>${divs}</body></html>`

fs.writeFileSync(cssPath, cssString, 'utf8')
fs.writeFileSync(htmlPath, html, 'utf8')

/**

import * as express from 'express'
import * as path from 'path'
import * as fs from 'fs'

const app = express()

import './buildcss'

app.get('/', (req, res) => {
  console.log(path.resolve(__dirname, '../', 'public', 'index.html'))
  res.sendFile(path.resolve(__dirname, '../', 'public', 'index.html') )
})

app.listen(5000, () => console.log('server up and listen 5000')) 
 */