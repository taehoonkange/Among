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
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import TicketReSell from "./pages/TicketReSell";
import ShowDetail from "./pages/ShowDetail";
import ShowPublish from "./pages/ShowPublic/ShowPublish";

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
          <Route path="/Show/:idx" element={<ShowDetail />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/TicketBook" element={<TicketBook />} />
          <Route path="/TicketReSell" element={<TicketReSell />} />
          <Route path="/Guide" element={<Guide />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/ShowPublish" element={<ShowPublish />} />
        </Routes>
      </ContentWrapDiv>
      <Footer></Footer>
    </TotalWrapDiv>
  );
}

export default App;
