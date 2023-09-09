import React from 'react'
import resumo from '../assets/icons/resumo.svg'
import vendas from '../assets/icons/vendas.svg'
import webhooks from '../assets/icons/webhooks.svg'
import configuracoes from '../assets/icons/configuracoes.svg'
import contato from '../assets/icons/contato.svg'
import sair from '../assets/icons/sair.svg'
import FintechSVG from './FintechSVG'
import {NavLink} from 'react-router-dom'

const slideNavStyles: React.CSSProperties = {
  background: '#cecece',
  padding: '10px',
  marginRight: '10px'
}

const li: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  listStyle:'none'
}

const ul: React.CSSProperties = {
  padding:'0'
}

const span: React.CSSProperties = {
  width:'24px'
}

const SideNav = () => {
  return (
    <nav style={slideNavStyles}>
      <FintechSVG title='fintech logo'/>
      <ul style={ul}>
        <li style={li}>
          <span>
            <img src={resumo} alt="Icone de Resumo" />
          </span>
          <NavLink to="/">Resumo</NavLink>
        </li>
        <li style={li}>
          <span>
            <img src={vendas} alt="Icone de Vendas" />
          </span>
          <NavLink to="/vendas">Vendas</NavLink>
        </li>
        <li style={li}>
          <span>
            <img src={webhooks} alt="Icone de Webhooks" />
          </span>
          Webhooks
        </li>
        <li style={li}>
          <span style={span}>
            <img src={configuracoes} alt="Icone de Configurações" />
          </span>
          Configurações
        </li>
        <li style={li}>
          <span>
            <img src={contato} alt="Icone de Contato" />
          </span>
          Contato
        </li>
        <li style={li}>
          <span>
            <img src={sair} alt="Icone de Sair" />
          </span>
          Sair
        </li>
      </ul>
    </nav>
  )
}

export default SideNav