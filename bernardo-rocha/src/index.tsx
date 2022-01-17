import * as React from 'react'
import * as ReactDOM from 'react-dom'

import './styles/global.scss'
import { App } from './app'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
