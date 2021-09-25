import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import { Button } from '../../components/Button';

import loginSVG from '../../assets/images/login.svg'

import './styles.scss';

export function Login() {
  const [cpf, setCpf] = useState('');
  const [pass, setPass] = useState('');
  const history = useHistory();

  // function loginUser() {
  //   Axios.post('http://localhost:3333/api/user/login', {
  //     cpf: cpf,
  //     password: pass,
  //   }).then(response => {
  //     try {
  //       history.push('/projects');
  //     } catch (e) {
  //       if(e.response) {
  //         toast.error(e.response.status)
  //       }
  //     }
  //   });
  // }

  return(
    <>
      <div><Toaster/></div>
      <div id="loginPage">
        <div className="loginCard">
          <main className="loginFields">
            <img src={loginSVG} alt="Login svg" />
            <div className="title">
              <h1>Welcome back!</h1>
              <p>Fill fields correctly.</p>
            </div>
            <input 
              type="text" 
              placeholder="Your CPF" 
              value={cpf}
              onChange={e => setCpf(e.target.value)}
            />
            <input 
              type="password" 
              placeholder="Your Password" 
              value={pass}
              onChange={e => setPass(e.target.value)}
            />
            <button >Login</button>
            <Link to="#">Esqueci minha senha.</Link>
          </main>
        </div>
      </div>
    </>
  );
}