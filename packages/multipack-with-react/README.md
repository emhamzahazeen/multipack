<div align="center">
  <a href="https://gherciu.github.io/multipack/">
  <img width="200" height="200"
    src="https://raw.githubusercontent.com/Gherciu/multipack/master/logo.png">
  </a>
  <h1>multipack-with-react</h1>
  <p>An example of react multipack package. Part of <a href="https://github.com/Gherciu/multipack">multipack</a> monorepo</p>
  <p>
    <a href="https://gherciu.github.io/multipack/docs/getting-started">Getting Started</a>
    | <a href="https://gherciu.github.io/multipack/docs/api">API</a>
    | <a href="https://gherciu.github.io/multipack/blog/">Blog</a>
  </p>
</div>

[![GitHub](https://img.shields.io/github/license/Gherciu/multipack)](https://github.com/Gherciu/multipack/blob/master/LICENSE)
[![Multipack](https://img.shields.io/badge/Generated%20from-Gherciu%2Fmultipack-green)](https://github.com/Gherciu/multipack)

## Getting started

- Install: `npm i multipack-with-react`

```js
import React from 'react'
import useCounter from 'multipack-with-react'

const App = () => {
  const { count, increment, decrement } = useCounter(0)
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}
```

Or use via cdn:

```html
<!--index.html-->
<script src="https://cdn.jsdelivr.net/npm/multipack-with-react@latest/build/index.js"></script>
<script>
  const App = () => {
    const { count, increment, decrement } = multipackWithReact(0)
    return (
      <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    )
  }
</script>
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**[@Gherciu/multipack](https://github.com/Gherciu/multipack)** © [GHERCIU](https://github.com/Gherciu), Released under the [MIT](https://github.com/Gherciu/multipack/blob/master/LICENSE) License.<br>
Authored and maintained by GHERCIU with help from contributors ([list](https://github.com/Gherciu/multipack/contributors)).

#### If you like this repository star⭐ and watch👀 on [GitHub](https://github.com/Gherciu/multipack)
