import Div from './Div.js';

export default function App($app) {
  this.state = {
    divState : '메롱!'
  }

  const div = new Div({
    $app,
    initialState : this.state.divState
  })
}