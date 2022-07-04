import { Chip } from "components"
import React from "react"
import styled from "styled-components"
import Decorator from "icons/decorator2.svg"

const Skills = ({ title, skillList }) => (
  <SkillsSection className="container">
    {title}
    <p className="font-2-m cor-1">
      Estas são as principais linguagens e tecnologias que utilizo.
    </p>
    <SkillsContainer>
      {skillList?.map((skill) => {
        if (window.matchMedia("(max-width: 800px)")) {
          return (
            <Chip
              key={skill}
              className="font-1-s cor-1"
              color="--cor-1"
              paddingY={4}
              paddingX={18}
              lineWidth={2}
              borderRadius={25}>
              {skill}
            </Chip>
          )
        }

        return (
          <Chip
            key={skill}
            className="font-1-m cor-1"
            color="--cor-1"
            paddingY={2}
            paddingX={22}
            lineWidth={2}
            borderRadius={25}>
            {skill}
          </Chip>
        )
      })}
    </SkillsContainer>
  </SkillsSection>
)

const SkillsSection = styled("section")`
  --padding-x: 40px;
  padding-top: 60px;
  padding-bottom: 20px;
  position: relative;

  p {
    padding: 0px var(--padding-x);
  }

  ::after{
    content: "";
    display: block;
    position: absolute;
    background: url(${Decorator});
    width: 64px;
    height: 82px;
    top: calc( 100% + 30px);
    left: 0px;
  }

  @media (max-width: 1200px) {
    ::after{
      transform: scale(0.6);
    }
  }

  @media (max-width: 800px) {
    padding-bottom: 0px;

    p {
      padding: 0px;
      font: 400 1.125rem/1.33 "Roboto Mono", sans-serif;
    }

    ::after{
      display: none;
    }
  }
`

const SkillsContainer = styled("ul")`
  padding: 6px var(--padding-x);
  display: flex;
  flex-wrap: wrap;
  gap: 20px 24px;
  justify-content: start;
  align-items: center;

  @media (max-width: 800px) {
    padding: 0px;
    gap: 12px 15px;
    justify-content: center;
  }
`

export default Skills
