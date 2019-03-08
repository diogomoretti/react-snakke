import React, { Component } from 'react'

export default class Snakke extends Component {
  constructor(props) {
    super(props)
    this.setProgress = this.setProgress.bind(this)
    this.getPercentageScroll = this.getPercentageScroll.bind(this)
  }

  state = {
    progress: 0
  }

  styles = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: this.props.height,
    opacity: this.props.opacity,
    zIndex: this.props.zIndex,
    background: `linear-gradient(to right, ${this.props.color} var(--scroll), transparent 0)`
  }

  getPercentageScroll (scrollPos) {
    const bodyHeight = document.body.clientHeight - document.documentElement.clientHeight
    return (scrollPos / bodyHeight) * 100
  }

  setProgress () {
    let total = this.getPercentageScroll(window.scrollY)

    this.setState({
      progress: total
    })
  }

  componentDidMount () {
    window.addEventListener('scroll', this.setProgress)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.setProgress)
  }

  render () {
    return (
      <div className='snakke-progress' style={{'--scroll': `${this.state.progress}%`, ...this.styles }}></div>
    )
  }
}

Snakke.defaultProps = {
  color: '#000',
  height: '5px',
  opacity: '1',
  zIndex: '9999'
}
