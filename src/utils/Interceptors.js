import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import TodoListIndex from '../pages/ArrayKeys/ArrayKeyIndex';
import TodoListId from '../pages/ArrayKeys/ArrayKeyId';

import DriveList from '../pages/Drive/DriveList';

import App from '../pages/ArrayKey'
import Mood from '../pages/ArrayKey'


class Interceptors extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={TodoListIndex} />

          <Route path='/keyid' component={TodoListId} />

          <Route path='/drive' component={DriveList} />

          <Route path='/key' component={App} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Interceptors);
