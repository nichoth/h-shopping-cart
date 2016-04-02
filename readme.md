# h shopping cart

Work in progress. Pass in a hyperscript function and data object, return HTML.


## install

    $ npm install h-shopping-cart


## example

```js
var renderCart = require('h-shopping-cart')
var bel = require('bel')
var style = require('h-shopping-cart/index.csjs')  // csjs styles

var cart = renderCart(bel, {
  rows: [
    {
      delete: bel`<button>delete</button>`
      title: 'Example Product',
      quantity: '3',
      priceEach: '$7',
      priceTotal: '$' + 7*3
    }
  ]
})

document.body.appendChild(cart)
```
