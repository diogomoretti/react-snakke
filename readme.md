<p align="center">
  <img src="./logo.png" alt="React Snakke" width="500">
</p>

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

#### default

```jsx
import React from 'react'

import Snakke from 'react-snakke'

export default function Example () {
  return (
    <Snakke />
  )
}
```

#### with custom values

```jsx
import React from 'react'

import Snakke from 'react-snakke'

export default function Example () {
  return (
    <Snakke
      color='#f0f'
      top='20px'
      height='3px'
      opacity='.8'
      zIndex='10'
      shadow
    />
  )
}
```

## Options / Props

| Prop    | Type   | Default value | Required | Description                       |
|---------|--------|---------------|----------|-----------------------------------|
| color   | String | #000          | false    | Set progress bar background color |
| height  | String | 5px           | false    | Set height of progress bar        |
| opacity | String | 1             | false    | Set opacity from 0 to 1           |
| top | String | 0             | false    | Set distance from top of page           |
| zIndex  | String | 9999          | false    | Set value based on css z-index property    |
| shadow  | Boolean | false          | false    | Progress bar with or without shadow    |

## License

MIT © [Diogo Moretti](https://github.com/diogomoretti)
