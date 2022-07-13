import React from "react"
import 'css/components.css'
import styled from "styled-components"

const Header = () => {
  return (
    <header>
      <Heading className="container cor-1">
      <a href="./">
        <h2 className="font-1-l">João Pedro</h2>
      </a>
        <nav aria-label="Navegação">
          <HeaderMenu className="header-menu font-1-m-b">
            <li><NavLink href="/#about">Sobre</NavLink></li>
            <li><NavLink href="#portfolio">Portfólio</NavLink></li>
            <li><NavLink href="/#education">Formação</NavLink></li>
            <li><NavLink href="/#skills">Skills</NavLink></li>
            <li><NavLink href="#contact">Contato</NavLink></li>
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


  @media (max-width: 800px) {
    padding-top: 20px;
  }
 
`

const HeaderMenu = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  gap: 40px 32px;

  @media (max-width: 800px) {
    gap: 15px;
    padding-top: 0px;
    padding-bottom: 0px;
  }
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

  @media (max-width: 800px) {
    font: 400 1.125rem/1.33 "Archivo", sans-serif;
    color: var(--cor-1);

    padding: 5px;
    ::after{
      display: none;
    }
  }

  @media (max-width: 600px) {
    background-color: var(--cor-s1);
    border-radius: 25px;
    padding: 8px 20px;

  }
`

export default Header