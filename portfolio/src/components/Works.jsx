import React from 'react'
import styled from "styled-components";
const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Python",
  "Figma",
]

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  justify-content: center;
  display: flex;
`;
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Items = styled.li`
  font-size: 80px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px aliceblue;
  position: relative;

  &:after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #e6ac26;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    &:after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;
const Right = styled.div`
  flex: 1;
`;
const Works = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>{data.map(item => (
            <Items key={item} text={item}>{item}</Items>
          ))}
          </List>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  )
}

export default Works