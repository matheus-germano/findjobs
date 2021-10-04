import { Route, Redirect } from 'react-router-dom';
import { useUser } from './hooks/useUser';

export function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useUser();

  return (
    <Route {...rest} render={props => (
      user ? 
        <Component {...props} />
      : <Redirect to='/' />
    )} />
  );
}