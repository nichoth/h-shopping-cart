var csjs = require('csjs')

module.exports = render
var styles = module.exports.styles = csjs`
  thead {
    border-bottom: 2px solid gray;
  }

  td, table {
    border: 1px solid black;
  }

  table {
    width: 100%;
    text-align: center;
  }

  .small {
    width: 5%;
    min-width: 1em;
  }

  .title {
    text-align: left;
  }
`

function render(bel, data) {
  var rows = data.rows

  function tableRow(row) {
    return bel`
      <tr>
        <td>x</td>
        ${Object.keys(row).map(function(k){
          var cl = k
          return bel`<td class="${cl}">${row[k]}</td>`
        })}
      </tr>
    `
  }

  function tHead(labels) {
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
    <table>
      ${tHead(data.head)}
      <tbody>
        ${rows.map(tableRow)}
      </tbody>
      ${tFoot(data.foot)}
    </table>
  `
}
