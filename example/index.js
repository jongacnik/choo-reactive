var html = require('choo/html')
var devtools = require('choo-devtools')
var choo = require('choo')
var reactive = require('..')

var app = choo()
app.use(devtools())
app.use(reactive())
app.use(countStore)
app.route('/', mainView)
app.mount('body')

function mainView (state, emit) {
  return html`
    <body>
      <h1>count is ${state.count}</h1>
      <button onclick=${onclick}>Increment</button>
    </body>
  `

  function onclick () {
    emit('increment', 1)
  }
}

function countStore (state, emitter) {
  state.count = 0
  emitter.on('increment', function (count) {
    state.count += count
  })
}