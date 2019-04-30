import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardContainer from '../containers/dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={DashboardContainer} />
      <Route path="/test" component={() => <div>test</div>} />
    </Switch>
  );
}
