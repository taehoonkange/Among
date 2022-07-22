import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import styled from "styled-components";
import Influencer from "./pages/Influencer";
import Show from "./pages/Show";
import Community from "./pages/Community";
import TicketBook from "./pages/TicketBook";
import Guide from "./pages/Guide";
import MyPage from "./pages/MyPage";

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
          <Route path="/Influencer" element={<Influencer />} />
          <Route path="/Show" element={<Show />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/TicketBook" element={<TicketBook />} />
          <Route path="/Guide" element={<Guide />} />
          <Route path="/MyPage" element={<MyPage />} />
        </Routes>
      </ContentWrapDiv>
      <Footer></Footer>
    </TotalWrapDiv>
  );
}

export default App;
