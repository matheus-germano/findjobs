import { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';
import { FaTimes } from 'react-icons/fa';

import { Input } from '../Input';
import { Button } from '../Button';
import { Dropdown } from '../Dropdown';

import { items } from './experienceItems';

import './styles.scss';

export function Sidebar({ formType, setFormType, isActive, setSidebarActive }) {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [github, setGithub] = useState('');
  const [experience, setExperience] = useState('');
  const [open, setOpen] = useState(false);

  const registerUser = (e) => {
    e.preventDefault();

    Axios.post('/api/user/register', {
      name: name,
      email: email,
      password: password,
      github: github,
      cpf: cpf,
      experience: experience
    }).then((response) => {});

    console.log(name);
    console.log(cpf);
    console.log(email);
    console.log(password);
    console.log(github);
    console.log(experience);

    setName('');
    setCpf('');
    setEmail('');
    setPassword('');
    setGithub('');
    setExperience('');
  }

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
                    <Input type="text" placeholder="Seu nome" onChange={e => setName(e.target.value)} />
                    <Input type="text" placeholder="Seu CPF" onChange={e => setCpf(e.target.value)} />
                    <Input type="text" placeholder="Seu e-mail" onChange={e => setEmail(e.target.value)} />
                    <Input type="password" placeholder="Sua senha" onChange={e => setPassword(e.target.value)} />
                    <div className="profile-image">
                      <label htmlFor="img">Foto de perfil</label>
                      <Input type="file" name="img" id="img" />
                    </div>
                    <Input type="text" placeholder="Seu Github" onChange={e => setGithub(e.target.value)} />
                    <OutsideClickHandler
                      onOutsideClick={() => {
                        setOpen(false);
                      }}
                    >
                      <Dropdown items={items} open={open} setOpen={setOpen} setExperience={setExperience} />
                    </OutsideClickHandler>
                    <Button onClick={e => registerUser(e)}>Cadastrar</Button>
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