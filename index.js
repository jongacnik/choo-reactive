var onChange = require('on-change')

module.exports = chooReactive

function chooReactive () {
  return function (state, emitter, app) {
    app.state = onChange(state, () => emitter.emit(state.events.RENDER))
  }
}