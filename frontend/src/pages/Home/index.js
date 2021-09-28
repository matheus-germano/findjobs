import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

import { useUser } from '../../hooks/useUser';

import { Button } from '../../components/Button'
import { ProjectCard } from '../../components/ProjectCard'
import { Sidebar } from '../../components/Sidebar';

import { FakeProjects } from './data';
import { Classes } from './data';

import './styles.scss';

export function Home() {
  const history = useHistory();
  const { user } = useUser();
  const [sidebarActive, setSidebarActive] = useState(false);

  function handleRedirectUserToProjects() {
    if(user) {
      history.push('/projects');
    } else {
      setSidebarActive(true);
    }
  }

  function handleRedirectUserToClasses() {
    if(user) {
      history.push('/classes');
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
          <div className="projects-description">
            <div className="texts">
              <h1>Projetos</h1>
              <p>Aqui você encontrará diversas ideias de projetos para conseguir ingressar e desenvolver toda a proposta ou até mesmo criar o seu próprio projeto para que outras pessoas desenvolvam sua ideia. </p>

              <Button onClick={handleRedirectUserToProjects}>Acesse mais projetos</Button>
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

        <div className="classes-section">
          <div className="classes-examples">
            <div className="classes-wrapper">
              { Classes.map((classes, index) => (
                  <iframe key={index} width="320" height="180" src={classes.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                )) 
              }
            </div>
          </div>
          <div className="classes-description">
              <div className="texts">
                <h1>Aulas</h1>
                <p>Você poderá assistir aulas preparadas por nossa equipe para relembrar algum conteúdo ou até mesmo aprender coisas novas sobre tecnologia para ficar afiado na hora de desenvolver um projeto.</p>

                <Button onClick={handleRedirectUserToClasses}>Acesse mais aulas</Button>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}
