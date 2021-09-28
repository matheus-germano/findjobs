import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

import { Input } from '../Input';
import { Button } from '../Button';

import './styles.scss';

export function Sidebar({ isActive, setSidebarActive }) {
  return(
    <div className="sidebarWrapper">
      <div className={ isActive ? 'sidebar active' : 'sidebar' }>
        <div className="sidebarHeader">
          <FaTimes onClick={() => setSidebarActive(false)} />
        </div>
        <div className="sidebarBody">
          <h1>Login.</h1>
          <form className="loginForm">
            <Input type="text" placeholder="Seu CPF" />
            <Input type="password" placeholder="Sua senha" />
            <Button>Entrar</Button>
            <Link to="/">Esqueci minha senha.</Link>
          </form>
        </div>
      </div>
    </div>
  );
}