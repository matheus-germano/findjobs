import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';

export function Routes() {
  return(
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" component={Login}></Route>
      </Switch>
    </BrowserRouter>
  )
}