import React from "react";
import styled from "styled-components";
import Banner1 from "../components/Home/Banner1";
import Banner2 from "../components/Home/Banner2";
const HomeBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  return (
    <HomeBox>
      <Banner1></Banner1>
      <Banner2></Banner2>
    </HomeBox>
  );
};

export default Home;
