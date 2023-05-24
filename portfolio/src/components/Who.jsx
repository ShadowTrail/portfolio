import React from 'react'
import { RxDividerHorizontal } from 'react-icons/rx';

import styled from "styled-components";
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;

`;
const Right = styled.div`
  flex: 1;
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
  width: 150px;
  background-color: #e6ac26;
  color: white;
  font-weight: 400;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const style = { fontSize: "30px" };
const Who = () => {
  return (
    <Section>
      <Container>
        <Left></Left>
        <Right>
          <Title>Think outside the square space</Title>
          <What>
            <RxDividerHorizontal style={style} />
            <Sub>Who are we?</Sub>
          </What>
          <Desc>
            A creative person aspiring to be a designer and developer with a passion for the arts.
          </Desc>
          <Button>See our works</Button>
        </Right>
      </Container>
    </Section>
  );
}

export default Who