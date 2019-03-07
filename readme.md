<h1 align="center">
  <img src="./logo.png" alt="React Snakke" width="500">
</h1>

<p align="center">
  <a href="https://travis-ci.org/diogomoretti/react-snakke/builds"><img alt="Travis (.org)" src="https://img.shields.io/travis/diogomoretti/react-snakke.svg?style=for-the-badge"></a> <a href="https://www.npmjs.com/package/react-snakke"><img alt="npm" src="https://img.shields.io/npm/v/react-snakke.svg?style=for-the-badge"></a> <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=for-the-badge" alt="JavaScript Style Guide" /></a>
</p>

## Install

#### npm
```bash
npm install --save react-snakke
```

#### yarn
```bash
yarn add react-snakke
```

## Usage

```jsx
import React, { Component } from 'react'

import Snakke from 'react-snakke'

class Example extends Component {
  render () {
    return (
      <Snakke />
    )
  }
}
```

## Options / Props

| Prop    | Type   | Default value | Required | Description                       |
|---------|--------|---------------|----------|-----------------------------------|
| color   | String | #000          | false    | Set progress bar background color |
| height  | String | 5px           | false    | Set height of progress bar        |
| opacity | String | 1             | false    | Set opacity from 0 to 1           |
| zIndex  | String | 9999          | false    | Set value from 0 to 9999          |

## License

MIT © [Diogo Moretti](https://github.com/diogomoretti)
