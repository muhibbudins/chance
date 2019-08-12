# Chance

Give you a result from random calculation by decimal scoring

## Usage

Use NPM to install **zero-chance**

```bash
$ npm install zero-chance
```

Import and create config on your project :

```js
import Chance from 'zero-chance'

const weights = [
  {
    weight: 0.001,
    title: 'Some title',
    description: 'Some description'
  },
  {
    weight: 20.40,
    title: 'Some title',
    description: 'Some description'
  },
  ... so on
]

const simple = Chance(weights)

console.log(simple) // 1 <-- result of random, given number by highest probability

/**
 * Or, you can show any detail on result with option
 */

const result = Chance(weights, {
  detail: true
})

console.log(result)
// Given result by highest probability
// {
//  index: 1,
//  weight: 0.001,
//  title: 'Some title',
//  description: 'Some description'
// } 
```

## License

This project under MIT License
