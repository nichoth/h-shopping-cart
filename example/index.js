var renderCart = require('../')
var bel = require('bel')

var cart = renderCart(bel, {
  head: ['Product', 'Qty', '', '$'],
  rows: [
    {
      title: 'Example Product',
      quantity: '3',
      priceEach: '$7',
      priceTotal: '$' + 7*3
    }
  ],
  foot: ['','','','total','$21']
})

document.body.appendChild(cart)
