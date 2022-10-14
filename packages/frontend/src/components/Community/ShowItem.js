import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setInfluencerDetailData } from "../../slice/postSlice";

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

const ShowItem = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <PerformContainer>
      <Link
        onClick={() => dispatch(setInfluencerDetailData({ value: data }))}
        to={`CommunityFeed/${data.Community.id}`}
      >
        <PosterImgContainer
          src={`http://localhost:3065/${data.Influencer.Image.src}`}
          onError={handleError}
          alt="poster img"
        />
        <DurationDiv>{data.Influencer.name}</DurationDiv>
        <NameDiv>{data.Influencer.description}</NameDiv>
      </Link>
    </PerformContainer>
  );
};

export default ShowItem;
