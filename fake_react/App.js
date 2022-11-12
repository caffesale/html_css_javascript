import Div from './src/Div.js';

export default function App({ $target }) {
  this.state = {
    divstate: ""
  }

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState
    }
  }

  const div = new Div({
    $target,
    initialState : "메롱"
  })
}