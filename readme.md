# choo-reactive

auto-trigger app render on state change. Uses [on-change](https://github.com/sindresorhus/on-change) under the hood.

## Example

Clone of the [choo example](https://github.com/choojs/choo#example) but app is automatically re-rendered on state update:

```js
var choo = require('choo')
var html = require('choo/html')
var devtools = require('choo-devtools')
var reactive = require('choo-reactive')

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
```

## See Also

- [on-change](https://github.com/sindresorhus/on-change)
- [`Proxy` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)