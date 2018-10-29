import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import TodoListIndex from '../pages/ArrayKeys/ArrayKeyIndex';
import TodoListId from '../pages/ArrayKeys/ArrayKeyId';

import RouteHome from '../pages/Route'
import RouteMoreList from '../pages/Route/RouteMoreList'

import Ticket from '../pages/Ticket'
import TicketList from '../pages/Ticket/TicketList'

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

          <Route exact path='/route' component={RouteHome} />
          <Route path='/route/more' component={RouteMoreList} />

          <Route exact path='/ticket' component={Ticket} />
          <Route path='/ticket/list' component={TicketList} />

          <Route path='/drive/list' component={DriveList} />

          <Route path='/key' component={App} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Interceptors);
