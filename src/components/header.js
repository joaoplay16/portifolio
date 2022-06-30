import React from "react"
import 'css/components.css'
import styled from "styled-components"

const Header = () => {
  return (
    <header>
      <Heading className="container">
      <a href="./">
        <h2 className="font-1-l">João Pedro</h2>
      </a>
        <nav aria-label="Navegação">
          <HeaderMenu className="header-menu font-1-m-b">
            <li><NavLink href="">Sobre</NavLink></li>
            <li><NavLink href="">Portfolio</NavLink></li>
            <li><NavLink href="">Formação</NavLink></li>
            <li><NavLink href="">Skills</NavLink></li>
            <li><NavLink href="">Contato</NavLink></li>
          </HeaderMenu>
        </nav>
      </Heading>
    </header>
  )
}


const Heading = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
`

const HeaderMenu = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  gap: 40px 32px;
`

const NavLink = styled('a')`
  position: relative;
  padding: 16px 0;
  display: inline-block;

  ::after{
    content: "";
    display: block;
    position: absolute;
    width: 0%;
    height: 3px;
    background: var(--cor-p1);
    top: 46px;
    left: 0px;
    transition: .3s;
  }

  :hover:after{
    width: 50%;
  }
`

export default Header