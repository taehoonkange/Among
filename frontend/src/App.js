import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import styled from "styled-components";

const TotalWrapDiv = styled.div`
  position: relative;
  min-height: 120vh;
`;

const ContentWrapDiv = styled.div`
  padding-bottom: 12rem;
  max-width: 100%;
  overflow-x: hidden;
`;
function App() {
  return (
    <TotalWrapDiv>
      <ContentWrapDiv>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ContentWrapDiv>
      <Footer></Footer>
    </TotalWrapDiv>
  );
}

export default App;
