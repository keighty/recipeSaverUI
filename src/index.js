import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './styles/vendor/normalize.css'
import './styles/vendor/skeleton.css'

import App from './App'
import registerServiceWorker from './services/registerServiceWorker'
import './styles/index.css'

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
registerServiceWorker()
