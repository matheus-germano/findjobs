import { useState } from 'react';
import { Link } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';
import { FaTimes } from 'react-icons/fa';

import { Input } from '../Input';
import { Button } from '../Button';
import { Dropdown } from '../Dropdown';

import { items } from './experienceItems';

import './styles.scss';

export function Sidebar({ formType, setFormType, isActive, setSidebarActive }) {
  const [open, setOpen] = useState(false);

  return(
    <div className={ isActive ? "sidebarWrapper active" : "sidebarWrapper" }>
      <OutsideClickHandler
        onOutsideClick={() => {
          setSidebarActive(false);
          setFormType('');
        }}
      >
        <div className={ isActive ? "sidebar active" : "sidebar" }>
          <div className="sidebarHeader">
            <FaTimes onClick={() => {
              setSidebarActive(false);
              setFormType('');
            }} />
          </div>
          <div className="sidebarBody">
            {
              formType === 'register' ? (
                <>
                  <h1>Cadastro.</h1>
                  <form className="form">
                    <Input type="text" placeholder="Seu nome" />
                    <Input type="text" placeholder="Seu CPF" />
                    <Input type="password" placeholder="Sua senha" />
                    <Input type="text" placeholder="Seu Github" />
                    <Input type="text" placeholder="Seu celular" />
                    <OutsideClickHandler
                      onOutsideClick={() => {
                        setOpen(false);
                      }}
                    >
                      <Dropdown items={items} open={open} setOpen={setOpen} />
                    </OutsideClickHandler>
                    <Button>Cadastrar</Button>
                    <Link to="#" onClick={() => setFormType('login')}>Já tenho uma conta.</Link>
                  </form>
                </>
              ) : (
                <>
                  <h1>Entrar.</h1>
                  <form className="form">
                    <Input type="text" placeholder="Seu CPF" />
                    <Input type="password" placeholder="Sua senha" />
                    <Button>Entrar</Button>
                    <Link to="#" onClick={() => setFormType('register')}>Ainda não tenho uma conta.</Link>
                    <Link to="/">Esqueci minha senha.</Link>
                  </form>
                </>
              )
            }
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
}