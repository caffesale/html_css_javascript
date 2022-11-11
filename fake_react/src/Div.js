
export default function Div({ $app, initialState }) {
  this.state = initialState;

  this.$target = document.createElement('div')
  this.$target.className = 'test-div';
  $app.appendChild(this.$target);

  this.render = () => {
    this.$target.innerHTML = `<div>${this.state}</div>`
  }
}