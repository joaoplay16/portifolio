import React from "react"
import styled from "styled-components"

const PortfolioItem = ({children, image, imageDescription, technologies, link}) => (
  <ItemContainer>
    <img src={image} alt={imageDescription} />
    <p className="font-2-xs cor-3">
      {children}
    </p>
    <ul>
      {technologies?.map(tech => (
         <Chip className="font-1-xs cor-p2">{tech}</Chip>
      ))}
    </ul>

    <a className="font-2-xs cor-0" href={link}>
      Mostre-me mais
    </a>
  </ItemContainer>
)

const ItemContainer = styled("div")`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  height: 540px;
  padding: 10px;
  border-radius: 25px;
  box-shadow: 0 0px 4px 0.5px rgb(10, 39, 55, 0.5);
  background-color: var(--cor-s3);

  img {
    width: 100%;
    max-height: 330px;
    border-radius: 15px 15px 0px 0px;
    object-fit: cover;
    object-position: top;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
    align-items: center;
  }

  a {
    align-self:center ;
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
`

const Chip = styled("li")`
  padding: 2px 10px;
  border-radius: 10px;
  border: 2px solid var(--cor-p2);
  max-width: 16ch;
`

export default PortfolioItem
