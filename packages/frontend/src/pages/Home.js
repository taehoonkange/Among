import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Banner1 from "../components/Home/Banner1";
import Banner2 from "../components/Home/Banner2";
import Banner3 from "../components/Home/Banner3";
import Banner4 from "../components/Home/Banner4";
import Banner5 from "../components/Home/Banner5";
import GetUserData from "../hooks/GetUserData";
const HomeBox = styled.div`
  height: 100%;
  width: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  const [section1, setSection1] = useState(false);
  const [section2, setSection2] = useState(false);
  const [section3, setSection3] = useState(false);

  GetUserData();
  const handleScroll = (event) => {
    console.log("scrollTop: ", event.currentTarget.scrollTop);
    console.log("clientHeight: ", event.currentTarget.clientHeight);
    console.log("scrollHeight:", event.currentTarget.scrollHeight);
    if (!section1 && event.currentTarget.scrollTop > 300) {
      setSection1(true);
    }
    if (!section2 && event.currentTarget.scrollTop > 1100) {
      setSection2(true);
    }
    if (!section3 && event.currentTarget.scrollTop > 1780) {
      setSection3(true);
    }
  };

  return (
    <HomeBox onScroll={handleScroll}>
      <Banner1></Banner1>
      <Banner2 section1={section1}></Banner2>
      <Banner4 section2={section2}></Banner4>
      <Banner5 section3={section3}></Banner5>
    </HomeBox>
  );
};

export default Home;
