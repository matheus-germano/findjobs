import { Routes } from './routes';
import { UserContextProvider } from './contexts/userContext';

import './styles/global.scss'

function App() {
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  );
}

export default App;
