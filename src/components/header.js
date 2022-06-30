import React from "react"
import 'css/components.css'

const Header = () => {
  return (
    <header>
      <div>
      <a href="./">
        <h2>João Pedro</h2>
      </a>
        <nav >
          <ul >
            <li><a href="">Sobre</a></li>
            <li><a href="">Portfolio</a></li>
            <li><a href="">Formação</a></li>
            <li><a href="">Skills</a></li>
            <li><a href="">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header