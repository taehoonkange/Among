import React from "react";
import styled from "styled-components";
import Banner1 from "../components/Home/Banner1";
import Banner2 from "../components/Home/Banner2";
import Banner3 from "../components/Home/Banner3";
import Banner4 from "../components/Home/Banner4";
import Banner5 from "../components/Home/Banner5";
const HomeBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  return (
    <HomeBox>
      <Banner1></Banner1>
      <Banner2></Banner2>
      <Banner3></Banner3>
      <Banner4></Banner4>
      <Banner5></Banner5>
    </HomeBox>
  );
};

export default Home;
