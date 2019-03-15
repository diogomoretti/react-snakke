import React from 'react'
import { defaultProps } from './common'

function createDiv(customStyles = {}) {
  const div = document.createElement('div')
  const { height, opacity, zIndex, shadow, color } = Object.assign(
    {},
    defaultProps,
    customStyles
  )

  const styles = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height,
    opacity,
    zIndex,
    filter: shadow ? `drop-shadow(0 0 .1em ${color})` : 'none',
    background: `linear-gradient(to right, ${color} var(--progress), transparent 0)`
  }

  for (const [key, value] of Object.entries(styles)) {
    div.style.setProperty(key, value)
  }

  document.body.prepend(div)

  return div
}

export function useSnakke(customStyles) {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const handleScroll = () => {
      const { body, documentElement } = document
      const bodyHeight = body.clientHeight - documentElement.clientHeight

      const progress = (window.scrollY / bodyHeight) * 100
      setProgress(Math.round(progress))
    }

    window.addEventListener('scroll', handleScroll)
    const div = createDiv(customStyles)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.body.removeChild(div)
    }
  }, [customStyles])

  React.useEffect(() => {
    const rootEl = document.documentElement
    rootEl.style.setProperty('--progress', `${progress}%`)

    return () => {
      rootEl.style.setProperty('--progress', null)
    }
  }, [progress])
}
