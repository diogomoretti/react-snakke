import { Component } from "react";

interface Props {
    /**
     * Set progress bar background color
     * Default value is #000
     * @type {string}
     */
    color?: string;
    /**
     * Set height of progress bar
     * Default value is 5px
     * @type {string}
     */
    height?: string;
    /**
     * Set opacity from 0 to 1
     * Default value is 1
     * @type {string}
     */
    opacity?: string;
    /**
     * Set value based on CSS z-index property
     * Default value is 9999
     * @type {string}
     */
    zIndex?: string;
}

export default class Snakke extends Component<Props> {}
