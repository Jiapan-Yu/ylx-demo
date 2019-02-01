import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import TodoListIndex from '../pages/ArrayKeys/ArrayKeyIndex';
import TodoListId from '../pages/ArrayKeys/ArrayKeyId';

import RouteHome from '../pages/Route'
import RouteMoreList from '../pages/Route/RouteMoreList'

import Currying from '../pages/Currying'

import Ticket from '../pages/Ticket'
import TicketList from '../pages/Ticket/TicketList'
import TicketSearch from '../pages/Ticket/TicketSearch'

import DriveList from '../pages/Drive/DriveList';

import SearchBarExample from '../pages/SearchBar';

import Timer from '../pages/Observer'
import TodoList from '../pages/Observers/index.js'

// from react_cookbook
import Todo from '../pages/Todo/todo'
import Pomodoro from '../pages/Pomodoro'
import Coins from '../pages/CryptoCoins'
import SimpleListOfNotes from '../pages/SimpleListOfNotes/App.js'
import C3chart from '../pages/C3'
import Animation from '../pages/BasicAnimation'
import PureComponent from '../pages/PureComponent'

import MobX from '../pages/MobX'

import ParentComponent from '../pages/ParentCallChild'

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

          <Route path='/currying' component={Currying} />

          <Route exact path='/ticket' component={Ticket} />
          <Route path='/ticket/list' component={TicketList} />
          <Route exact path='/ticket/search' component={TicketSearch} />

          <Route path='/drive/list' component={DriveList} />

          <Route path='/search' component={SearchBarExample} />

          <Route path='/timer' component={Timer} />
          <Route path='/todolist' component={TodoList} />

          <Route path='/todo' component={Todo} />
          <Route path='/pomodoro' component={Pomodoro} />
          <Route path='/coins' component={Coins} />
          <Route path='/simplelistofnotes' component={SimpleListOfNotes} />
          <Route path='/c3chart' component={C3chart} />
          <Route path='/animation' component={Animation} />
          <Route path='/purecomponent' component={PureComponent} />

          <Route path='/mobx' component={MobX} />

          <Route path='/parentcomponent' component={ParentComponent} />

          <Route path='/key' component={App} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Interceptors);
