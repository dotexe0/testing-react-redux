import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import App from 'components/App'
import Root from 'Root'

const appWithReduxStore = 
  <Root>  
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Root>

ReactDOM.render(appWithReduxStore, document.getElementById('root'))
