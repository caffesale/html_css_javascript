function component ({
  $target,
  initialState: string
}) {
  this.$element = document.createElement('div')
  $target.appendChild(this.$element)

  this.state = ""

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {

  }

  this.render()
}

export default component