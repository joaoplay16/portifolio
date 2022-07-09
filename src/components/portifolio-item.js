import React from "react"
import styled from "styled-components"
import {Chip, LinkButton} from "components"

const PortfolioItem = ({children, image, imageDescription, technologies, link}) => (
  <ItemContainer>
    <img src={image} alt={imageDescription} />
    <p className="font-2-xs cor-3">
      {children}
    </p>
    <ul>
      {technologies?.map(tech => (
         <Chip
         key={tech}
         className="font-1-xs cor-p2"
         color="--cor-p2"
         paddingY={2}
         paddingX={10}
         lineWidth={2}
         borderRadius={15}>
         {tech}
       </Chip>
      ))}
    </ul>

    <LinkButton className="font-2-xs cor-0" href={link}>
      Mostre-me mais
    </LinkButton>
  </ItemContainer>
)

const ItemContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 320px;
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
`

export default PortfolioItem
