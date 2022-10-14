import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { Grid, Container } from "@mui/material";
import HomeShow from "./HomeShow";

const TodayPerformContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  height: 960px;
  justify-content: center;
  margin-top: 50px;
  padding-bottom: 90px;
  background: linear-gradient(rgb(239, 238, 254) 3%, rgb(240, 244, 252) 97%);
  /* animation: slide 1500ms cubic-bezier(0.4, 0, 0.2, 1); */
  opacity: 0;
  @keyframes slide {
    from {
      padding-top: 200px;
      opacity: 0;
    }
    to {
      padding-top: 0px;
      opacity: 1;
    }
  }
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

const Banner2 = ({ section1 }) => {
  const [showList, SetShowList] = useState([1, 2, 3, 4]);
  const ref = useRef();
  useEffect(() => {
    const sectionRef = ref.current;
    if (section1) {
      sectionRef.style.animation = "slide 1500ms cubic-bezier(0.4, 0, 0.2, 1)";
      sectionRef.style.opacity = "1";
    }
  }, [section1]);
  return (
    <TodayPerformContainer ref={ref}>
      <StyledTodayPerformanceLink to="Show">
        🎪 진행중인 공연
      </StyledTodayPerformanceLink>
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Grid container spacing={1}>
          {showList.map((v, i) => {
            return (
              <Grid item xs={3}>
                <HomeShow key={i} index={i} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </TodayPerformContainer>
  );
};

export default Banner2;
