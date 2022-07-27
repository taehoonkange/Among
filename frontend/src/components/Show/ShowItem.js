import React from "react";
import styled from "styled-components";
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

const handleError = (e) => {
  e.target.src = "images/posterImg1.png";
};

const ShowItem = () => {
  return (
    <PerformContainer>
      <PosterImgContainer
        src={`https://ticketimage.interpark.com/Play/image/large/22/22008692_p.gif`}
        onError={handleError}
        alt="poster img"
      />
    </PerformContainer>
  );
};

export default ShowItem;
