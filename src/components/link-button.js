import React from "react"
import styled from "styled-components"

const LinkButton = (props) => (
  <StyledLink {...props}>{props.children}</StyledLink>
)

const StyledLink = styled("a")`
    align-self:center ;
    margin-top: 8px;
    padding: 8px 0px;
    position: relative;


  ::after {
    content: "";
    display: block;
    position: absolute;
    background-color: var(--cor-0);
    width: 100%;
    height: 2px;
    top: 25px;
  }
`

export default LinkButton