import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:profile" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
