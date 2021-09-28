import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

import { useUser } from '../../hooks/useUser';

import { Button } from '../../components/Button'
import { ProjectCard } from '../../components/ProjectCard'
import { Sidebar } from '../../components/Sidebar';

import { FakeProjects } from './data';

import './styles.scss';

export function Home() {
  const history = useHistory();
  const { user } = useUser();
  const [sidebarActive, setSidebarActive] = useState(false);

  function handleRedirectUser() {
    if(user) {
      history.push('/projects');
    } else {
      setSidebarActive(true);
    }
  }

  return (
    <>
      <Sidebar isActive={sidebarActive} setSidebarActive={setSidebarActive}/>
      <div id="home-page">
        <div className="welcome-section">
          <h1>Bem vindo à Find Jobs.</h1>
          <p>Ainda não tem uma conta?</p>
          <div className="buttons">
            <Button 
              isOutlined
              onClick={() => setSidebarActive(true)}
            >
              Entrar
            </Button>
            <Button>Cadastrar</Button>
          </div>
        </div>

          <h1 className="headline">O que você encontrará aqui?</h1>

        <div className="projects-section">

          <div className="section-description">
            <div className="texts">
              <h1>Projetos</h1>
              <p>Aqui você encontrará diversas ideias de projetos para conseguir ingressar e desenvolver toda a proposta ou até mesmo criar o seu próprio projeto para que outras pessoas desenvolvam sua ideia. </p>

              <Button onClick={handleRedirectUser}>Acesse mais projetos</Button>
            </div>
          </div>
          <div className="projects-examples">
            {
              FakeProjects.map((project, index) => (
                <ProjectCard data={project} key={index}/>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}
