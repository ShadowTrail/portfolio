import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works";
import Contact from "./components/Contact";
import styled from "styled-components"

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("https://wallpaperaccess.com/full/39632.jpg");
  &::-webkit-scrollbar {
    display: none;
  }
`;
function App() {
  return (
    <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
    </Container>
  );
}

export default App;
