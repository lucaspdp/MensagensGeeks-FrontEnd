import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main'
import SendMessage from './pages/SendMessage'
import Messages from './pages/Messages'
import EditMessage from './pages/EditMessage'

export default function Router() {
  return <BrowserRouter>
    <Switch>
        <Route path='/' exact component={Main}/>
        <Route path='/newmessage' component={SendMessage}/>
        <Route path='/messages' component={Messages}/>
        <Route path='/edit/:msgid' component={EditMessage}/>
    </Switch>
  </BrowserRouter>
}
