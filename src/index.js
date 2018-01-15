import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './styles/index.css'
import App from './App'
import registerServiceWorker from './services/registerServiceWorker'
import './styles/vendor/normalize.css'
import './styles/vendor/skeleton.css'

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
registerServiceWorker()
