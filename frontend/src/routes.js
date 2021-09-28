import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';

import { useUser } from './hooks/useUser';

export function Routes() {
  const { user } = useUser();

  return(
    <BrowserRouter>
      { user ? <Navbar /> : null}
      <Switch>
        <Route path="/" exact component={Home}></Route>
      </Switch>
    </BrowserRouter>
  )
}