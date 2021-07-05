import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home';

import './styles/global.scss'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
