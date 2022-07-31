import React, { useState } from "react";
import styled from "styled-components";

const Influencer = () => {
  const [dummy, setDummy] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <InfluenceLayout>
      {dummy.map((el) => {
        return (
          <InfluenceBox>
            <img
              className="Influence_img"
              alt=""
              src={`https://cdn-contents.weverse.io/admin/xlx2048/png/9748dae239044e65835bd894768beebe971.png`}
            ></img>
            <div className="Influence_title">BLACKPINK</div>
          </InfluenceBox>
        );
      })}
    </InfluenceLayout>
  );
};

export default Influencer;

const InfluenceLayout = styled.div`
  margin: 60px 0px 60px 0px;
  display: grid;
  justify-items: center;
  row-gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(25%, auto));
`;

const InfluenceBox = styled.div`
  display: inline-block;
  background-color: rgb(255, 255, 255);
  width: 350px;
  height: 370px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  vertical-align: top;
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 8px;

  & > img {
    width: 100%;
    height: 280px;
    object-fit: cover;
  }

  & > div {
    margin-top: 23px;
    margin-left: 23px;
    font-size: 30px;
    font-weight: 700;
  }
`;
