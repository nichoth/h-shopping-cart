var csjs = require('csjs')

module.exports = render
var styles = module.exports.styles = csjs`
  .cart {
  }

  .row {
    display: flex;
    flex-flow: row wrap;
  }

  .cell {
    flex: 1;
  }

  .small extends .cell{
    flex: 0.3;
  }

  .title {
    text-align: left;
  }
`

function render(bel, data) {
  var rows = data.rows

  function rowElmt(row) {
    return bel`
      <div class="${styles.row}">
        <div class="${styles.small}">x</div>
        ${Object.keys(row).map(function(k) {
          var cl = k + ' ' + (k === 'title' ? styles.cell : styles.small)
          return bel`<div class="${cl}">${row[k]}</div>`
        })}
      </div>
    `
  }

  function headElmt(labels) {
    return bel`
      <thead>
        <tr>
          <th class="${styles.small}"></th>
          ${labels.map(function(l) {
            return bel`
              <th>${l}</th>
            `
          })}
        </tr>
      </thead>
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
    <div class="${styles.cart} h-shopping-cart">
      ${rows.map(rowElmt)}
    </div>
  `
}
