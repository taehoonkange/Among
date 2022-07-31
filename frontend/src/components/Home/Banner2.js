import React, { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { Grid, Container } from "@mui/material";
import HomeShow from "./HomeShow";

const TodayPerformContainer = styled.div`
  display: flex-column;
  height: 100vh;
  justify-content: center;
  margin-top: 50px;
  padding-bottom: 90px;
  background: linear-gradient(rgb(239, 238, 254) 3%, rgb(240, 244, 252) 97%);
`;

const StyledTodayPerformanceLink = styled(Link)`
  display: flex;
  justify-content: center;
  font-size: 32px;
  font-weight: 700;
  margin-top: 60px;
  margin-bottom: 50px;
  text-decoration: none;
  color: black;
`;

const Banner2 = () => {
  const [showList, SetShowList] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <TodayPerformContainer>
      <StyledTodayPerformanceLink to="Show">
        🎪 진행중인 행사
      </StyledTodayPerformanceLink>
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Grid container spacing={1}>
          {showList.map((v, i) => {
            return (
              <Grid item xs={3}>
                <HomeShow key={i} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </TodayPerformContainer>
  );
};

export default Banner2;
