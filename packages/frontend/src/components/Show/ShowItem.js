import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PerformContainer = styled.div`
  width: 260px;
`;

const PosterImgContainer = styled.img`
  width: 260px;
  height: 260px;
  &:hover {
    transform: scale(1.03);
  }
  // boder-radius: "15px";
  object-fit: cover;
`;

const DurationDiv = styled.div`
  font-size: 14px;
  margin-top: 12px;
  margin-bottom: 10px;
  color: black;
  font-weight: 700;
`;

const NameDiv = styled.div`
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const handleError = (e) => {
  e.target.src = "images/posterImg1.png";
};

const ShowItem = ({ idx }) => {
  return (
    <PerformContainer>
      <Link to={`/Show/${idx}`}>
        <PosterImgContainer
          src={`https://ticketimage.interpark.com/Play/image/large/22/22008692_p.gif`}
          onError={handleError}
          alt="poster img"
        />
        <DurationDiv>2022.07.16</DurationDiv>
        <NameDiv>HIPHOPPLAYA FESTIVAL 2022</NameDiv>
      </Link>
    </PerformContainer>
  );
};

export default ShowItem;
