import React from "react"
import styled from "styled-components"

const LinkButton = (props) => (
  <StyledLink {...props}>{props.children}</StyledLink>
)

const StyledLink = styled("div")`
  display: flex;
  gap: 8px;
  align-items: flex-end;

  a {
    align-self: center;
    margin-top: 8px;
    padding: 8px 0px;
    position: relative;
  }

  a::after {
    content: "";
    display: block;
    position: absolute;
    background-color: var(--cor-0);
    width: 100%;
    height: 2px;
    top: 25px;
  }

  a::before {
    content: "";
    display: block;
    position: absolute;
    width: 32px;
    height: 32px;
    bottom: 0px;
    left: -40px;
  }
`

export default LinkButton