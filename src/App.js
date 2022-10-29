import { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import Portfolio from './components/lazyload/Portfolio';
import Navbar from './components/nav/Navbar';
import Footer from './components/footer/Footer';

const Links = [
  {
    id: 1,
    name: "Street"
  },
  {
    id: 2,
    name: "Fashion"
  },
  {
    id: 3,
    name: "B&W"
  },
  {
    id: 4,
    name: "Pattern"
  },
  {
    id: 5,
    name: "Scenery"
  },
  {
    id: 5,
    name: "Product"
  },
  {
    id: 5,
    name: "Contemporary Landscape"
  },
]

function App() {
  const [link, setLink] = useState("Pattern");
  const [Width, setWidth] = useState(window.innerWidth);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
  }, []);

  return (
    <AppMain>
      <Brand>DIKSHANT.</Brand>
      <Navbar Link={Links} setLink={setLink} />
      <Portfolio width={Width} link={link} />
      <Footer></Footer>
    </AppMain>
  );
}

const AppMain = styled.div`
  width: 100%;
`
const Brand = styled.div`
  font-family: jost;
  letter-spacing: 6px;
  width: 100%;
  margin: auto;
  padding: 12px 0px;
  text-align: center;
  font-size: 20px;
  font-weight: 300;
  background-color: black;
  color: white;
  @media (max-width: 600px) {
    display: none;
  }
`




export default App;
