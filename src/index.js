import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import { AppContainer } from 'react-hot-loader'

import { HashRouter } from 'react-router-dom'
import Interceptors from './utils/Interceptors'

ReactDOM.render(
  <AppContainer>
    <HashRouter>
      <Interceptors />
    </HashRouter>
  </AppContainer>,
  document.getElementById('root')
);