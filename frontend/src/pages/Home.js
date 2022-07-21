import React from "react";
import styled from "styled-components";
import Banner1 from "../components/Home/Banner1";
const HomeBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  return (
    <HomeBox>
      <Banner1></Banner1>
    </HomeBox>
  );
};

export default Home;
