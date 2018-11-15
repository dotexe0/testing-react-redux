import React from 'react'
import ReactDOM from 'react-dom'

import App from 'components/App'
import Root from 'Root'

const appWithReduxStore = 
  <Root>  
    <App />
  </Root>

ReactDOM.render(appWithReduxStore, document.getElementById('root'))
