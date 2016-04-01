var csjs = require('csjs')
var bstyle = require('h-buttons/lib/delete.csjs')

module.exports = csjs`
  .cart {
  }

  .row {
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 0.5em;
  }

  .cell {
    flex: 1;
  }

  .cell-title {
    flex: 6;
  }

  .small-cell{
    flex: 0.3;
  }

  .th-title {
    flex: 1.3;
  }

  .title {
    text-align: left;
  }

  .btn-col {
    max-width: 3em;
  }
`

