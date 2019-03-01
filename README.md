# color-seq
generate colors sequence in css accepted format (rgb or hex string), according to input values.

## install

```
npm install color-sequences
```

## Usages

```
import colorSeq from 'color-sequences';

// data should be an array of object, with keys 'label' and 'value'
const data = [
  { label: 'John Wick', value: 100 },
  { label: 'Tony Stark', value: 18000 },
  ...
];

// total can be any numbers equeals to or greater than the sum of all values
const total = 20000;

const injectedData = colorSeq(total, data);
// results:
// [
//   { label: 'John Wick', value: 100, color: '#c7b688' },
//   { label: 'Tony Stark', value: 18000, color: '#886c9e' },
//   ...
// ]
```

## Options
| name | value | description |
| :- | :- | :- |
| format | 'hash' or 'rgb' | The format of output color string. Default 'hash'. |
| inject | `true` or `false` | define the return array. Set `true` to return the original array of object with a key `color` injected, set `false` to return an array of object with only the key `color`. |
| satBase | 0 - 100 | Base of Saturation value. Default 28. Better not touching it unless you know about colouring. |
| satRange | number | Range of variations of Saturation that inputs can alter. Related to `satBase`. Better not touching it unless you know about colouring. |
| lumBase | 0 - 100 | Base of Lightness value. Default 62. Better not touching it unless you know about colouring. |
| lumRange | number | Range of variations of Lightness that inputs can alter. Related to `satBase`. Better not touching it unless you know about colouring. |


