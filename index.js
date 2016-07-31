var csjs = require('csjs')
var styles = require('./index.csjs')

module.exports = render

function render(bel, data) {
  var rows = data.rows

  function rowElmt(row) {
    return bel`
      <div class="${styles.row} h-cart-row">
        <div class="${styles.cell} ${styles['btn-col']}">
          ${row.delete}
        </div>
        <div class="h-cart-title ${styles['cell-title']}">${row.title}</div>
        ${cellElmt(row.priceEach)}
        ${cellElmt(row.quantity)}
        ${cellElmt(row.priceTotal)}
      </div>
    `
  }

  function cellElmt(content) {
    return bel`<div class="h-cart-cell ${styles.cell}">${content}</div>`
  }

  function headElmt(labels) {
    return bel`
      <div class="${styles.row}" h-cart-head>
        <div class="${styles['th-title']}">${labels.title}</div>

      </div>
    `
  }

  function tFoot(data) {
    return bel`
      <tfoot>
        <tr>
          ${data.map(function(d) {
            return bel`<td>${d}</td>`
          })}
        </tr>
      </tfoot>
    `
  }

  return bel`
    <div class="${styles.cart} h-cart">
      ${rows.map(rowElmt)}
    </div>
  `
}
