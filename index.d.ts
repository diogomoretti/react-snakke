import { Component } from 'react'

declare module 'react-snakke' {
  export interface SnakkeProps {
    /**
     * Set progress bar background color
     * Default value is #000
     * @type {string}
     */
    color?: string
    /**
     * Set height of progress bar
     * Default value is 5px
     * @type {string}
     */
    height?: string
    /**
     * Set opacity from 0 to 1
     * Default value is 1
     * @type {string}
     */
    opacity?: string
    /**
     * Set value based on CSS z-index property
     * Default value is 9999
     * @type {string}
     */
    zIndex?: string
    /**
     * Progress bar with or without shadow
     * Default value is false
     * @type {boolean}
     */
    shadow?: boolean
  }

  export function useSnakke(props?: SnakkeProps) {}

  export default class Snakke extends Component<SnakkeProps> {}
}
