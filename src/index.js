import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import { AppContainer } from 'react-hot-loader'
import timerData from './pages/Observer/timerData'
import todoStore from './pages/Observers/todoStore'
import { Provider } from 'mobx-react'

import { HashRouter } from 'react-router-dom'
import Interceptors from './utils/Interceptors'
const store = {
  timerData,
  todoStore
}

const unmountButton = document.getElementById('unmount')

function unmount() {
  ReactDOM.unmountComponentAtNode(
    document.getElementById('root')
  )
  document.getElementById('unmountMessage').style.display = 'block'
  unmountButton.remove()
}

unmountButton.addEventListener('click', unmount)

document.getElementById('unmountMessage').style.display = 'none'

ReactDOM.render(
  <AppContainer>
    <Provider {...store}>
      <HashRouter>
        <Interceptors />
      </HashRouter>
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);