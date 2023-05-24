import React from 'react'
import { styled } from 'styled-components'
import { AiOutlineSearch } from "react-icons/ai";
import a from "./nologo.png"

const Section = styled.div`
   display: flex;
   justify-content: center;
`
const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
`
const Links = styled.div`
    display: flex;
    align-items: center;
    gap:50px;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Icon = styled.div`
  width: 20px;
  cursor: pointer;
`
const Logo = styled.img`
   height: 60px;
   width: 60px;
`;
const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
`;
const Item = styled.li``;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #f7b00a;
  color: white;
`;
const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src={a} />
          <List>
            <Item>Home</Item>
            <Item>Works</Item>
            <Item>Contact</Item>
          </List>
        </Links>
        <Icons>
          <Icon><AiOutlineSearch />
          </Icon>
        <Button>Hire Now!</Button>
        </Icons>
      </Container>
    </Section>
  );
}

export default Navbar