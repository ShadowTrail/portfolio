import React from 'react'
import styled from "styled-components";
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Title = styled.h1`
  font-weight: bolder;
  color: #e6ac26;
  font-size: 40px;
`;
const Form = styled.div`
  display: flex;
  width: 500px;
  gap: 25px;
  flex-direction: column;
`;
const Input = styled.input`
  padding: 20px;
  background-color: #eBe6e6;
  border: none;
  border-radius: 5px;
`;
const TextArea = styled.textarea`
  padding: 20px;
  background-color: #ebe6e6;
  border: none;
  border-radius: 5px;
`;
const Button = styled.button`
  padding: 10px;
  background-color: #e6ac26;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
`;
const Right = styled.div`
  flex: 1;
`;
const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Form>
            <Title>Contact us</Title>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <TextArea placeholder='Write your message' rows={10}/>
            <Button>Send</Button>
          </Form>
        </Left>
        <Right>
          <Map/>
        </Right>
      </Container>
    </Section>
  );
}

export default Contact