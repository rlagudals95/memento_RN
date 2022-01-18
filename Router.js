import * as React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import {Switch} from 'react-router'
import Home from './src/view/Home';
import Mypage from './src/view/Mypage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/mypage" component={Mypage} />
        {/* Not Found */}
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;