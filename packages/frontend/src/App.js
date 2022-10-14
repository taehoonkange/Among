import "./App.css";
import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../src/pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import styled from "styled-components";
import Influencer from "./pages/Influencer";
import Show from "./pages/Show";
import CommunityFeed from "./pages/Community/CommunityFeed";
import CommunityInfluencer from "./pages/Community/CommunityInfluencer";
import CommunityVIPFeed from "./pages/Community/CommunityVIPFeed";

import TicketBook from "./pages/TicketBook";
import Guide from "./pages/Guide";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import TicketReSell from "./pages/TicketReSell";
import ShowDetail from "./pages/ShowDetail";
import ShowPublish from "./pages/ShowPublic/ShowPublish";
import SeatInfo from "./pages/SeatInfo";
import InfluencerRegister from "./pages/InfluencerRegister/InfluencerRegister";
import CommunityMain from "./pages/Community/CommunityMain";
import GetUserData from "./hooks/GetUserData";
import Decorate from "./pages/Decorate";
import MyTicket from "./pages/MyTicket";
import SelectSeat from "./pages/SelectSeat";
import Statistics from "./pages/Statistics";
import QRcodeReader from "./pages/QRcodeReader";
const TotalWrapDiv = styled.div`
  position: relative;
  min-height: 120vh;
`;

const ContentWrapDiv = styled.div`
  padding-bottom: 12rem;
  height: 100vh;
  max-width: 100%;
  overflow-x: hidden;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
    visibility: hidden;
  }
`;
function App() {
  GetUserData();
  return (
    <TotalWrapDiv>
      <ContentWrapDiv>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Influencer" element={<CommunityMain />} />
          <Route path="/Show" element={<Show />} />
          <Route path="/Show/:idx" element={<ShowDetail />} />
          <Route path="/Show/SelectSeat" element={<SelectSeat />} />
          <Route path="/Show/Statistics" element={<Statistics />} />
          <Route path="/Show/QRcodeReader" element={<QRcodeReader />} />
          <Route
            path="/Influencer/CommunityFeed/:id"
            element={<CommunityFeed />}
          />
          <Route
            path="/Influencer/CommunityVIPFeed/:id"
            element={<CommunityVIPFeed />}
          />
          <Route
            path="/Influencer/CommunityInfluencer/:id"
            element={<CommunityInfluencer />}
          />
          <Route path="/Decorate" element={<Decorate />} />
          <Route path="/TicketBook" element={<TicketBook />} />
          <Route path="/TicketReSell" element={<TicketReSell />} />
          <Route path="/Guide" element={<Guide />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/MyTicket/:idx" element={<MyTicket />} />
          <Route path="/ShowPublish" element={<ShowPublish />} />
          <Route path="/InfluencerRegister" element={<InfluencerRegister />} />
        </Routes>
      </ContentWrapDiv>
      <Footer></Footer>
    </TotalWrapDiv>
  );
}

export default App;
