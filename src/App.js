import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';

import './styles/global.scss'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
