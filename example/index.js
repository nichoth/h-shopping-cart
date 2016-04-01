var renderCart = require('../')
var delButton = require('h-buttons/lib/delete')
var bel = require('bel')

var cart = renderCart(bel, {
  rows: [
    {
      delete: delButton(bel.createElement, {
        title: 'Delete',
        onclick: console.log.bind(console, 'delete', 'example')
      }),
      title: 'Example Product',
      priceEach: '$7 ea',
      quantity: [symbol('×'), ' 3'],
      priceTotal: [symbol('='), ' $' + 7*3]
    },
    {
      delete: delButton(bel.createElement, {
        title: 'Delete',
        onclick: console.log.bind(console, 'delete', 'ham')
      }),
      title: 'Ham wedge',
      priceEach: '$12 ea',
      quantity: [symbol('×'), ' 1'],
      priceTotal: [symbol('='), ' $12']
    }
  ]
})

function symbol(content) {
  return bel`<span class="mod">${content}</span>`
}

document.body.appendChild(cart)
