/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PerformContainer = styled.div`
  display: flex-column;
  width: 203px;
  margin: 20px;
`;

const PosterImgContainer = styled.img`
  width: 260px;
  height: 360px;
  background-color: gray;
  &:hover {
    transform: scale(1.03);
  }
`;

const HomeShow = () => {
  const handleError = (e) => {
    e.target.src = "images/posterImg1.png";
  };

  return (
    <PerformContainer>
      <Link to={`/Detail/`}>
        <PosterImgContainer
          src={`http://ticketimage.interpark.com/TCMS4/Main/201903/TicketTodayNew_TicketTodayDrama_5c9237a5-782b-4c0d-8beb-2e70ebe260a0.jpg`}
          onError={handleError}
          alt="poster img"
        />
      </Link>
    </PerformContainer>
  );
};

export default HomeShow;
