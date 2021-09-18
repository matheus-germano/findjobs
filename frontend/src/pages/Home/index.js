import React from 'react'
import { Button } from '../../components/Button'

import './styles.scss'

export function Home() {
  return (
    <div id="home-page">
      <div className="welcome-section">
        <h1>Bem vindo à Find Jobs.</h1>
        <p>Ainda não tem uma conta?</p>
        <div className="buttons">
          <Button 
            isOutlined
          >
            Entrar
          </Button>
          <Button>Cadastrar</Button>
        </div>
      </div>

      <div className="features-section">
        
      </div>
    </div>
  )
}
