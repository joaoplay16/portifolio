import React from "react"
import styled from "styled-components"
const Subtitle = ({ children }) => (
  <Text className="font-1-l cor-1">{children}</Text>
)

const Text = styled("h2")`
  font-size: 1.9rem;
`

export default Subtitle
