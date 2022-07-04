import React from "react"
import styled from "styled-components"
const Chip = (props) => (
  <StyledChip {...props}>{props.children}</StyledChip>
)

const StyledChip = styled("li")`
  padding: ${({paddingY, paddingX}) =>  `${paddingY || 2}px ${paddingX || 10}px` };
  border-radius: ${({borderRadius}) => `${borderRadius || 100}px`};
  border: ${({lineWidth}) => `${lineWidth || 2}px`} 
          solid var(${({color}) => color || '--cor-0'});
  list-style: none;
`

export default Chip