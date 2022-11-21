
export default function Div({ $target, initialState }) {
  this.state = initialState;

  this.$element = document.createElement('div')
  this.$element.className = 'test-div';
  $target.appendChild(this.$element);

  this.render = () => {
    this.$target.innerHTML = `<div>${this.state}</div>`
  }

  this.render()
}