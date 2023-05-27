import React, { useState,useRef } from 'react'
import styled from "styled-components";
import Map from "./Map";
import emailjs from "@emailjs/browser";

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

const Form = styled.form`
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
  const form = useRef();
  const [success, setSuccess] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0ktc765",
        "template_gmrxjql",
        form.current,
        "moa9eJ9ZDm_MVVHQ7"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={form} onSubmit={handleSubmit}>
            <Title>Contact us</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <Button type="submit">Send</Button>
            {success &&
              "Your message has been sent, we'll get back to you soon."}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact


