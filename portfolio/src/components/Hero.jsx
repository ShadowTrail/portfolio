import React from 'react'
import styled from "styled-components";
import Navbar from './Navbar';
import { RxDividerHorizontal } from "react-icons/rx";
import moon from './moon.png'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

`;
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 75px;
`;
const What = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;
const Sub = styled.h2`
  color: #e6ac26;
`;
const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;
const Button = styled.button`
  padding: 10px;
  width: 100px;
  background-color: #e6ac26;
  color: white;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;

`;
const Img = styled.img`
  height: 600px;
  width: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @keyframes animate {
    100%{
      transform: translateY(30px);
    }
  }
`;

const style = {fontSize: "30px"}
const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <What>
            <RxDividerHorizontal style={style}/> 
            <Sub>What do we do?</Sub>
          </What>
          <Desc>
            We enjoy creating delightful, human-centered digital experiences.
          </Desc>
          <Button>Learn more</Button>
        </Left>
        <Right>
          <Img src={moon} />
        </Right>
      </Container>
    </Section>
  );
}

export default Hero