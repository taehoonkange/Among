import React, { useState } from "react";
import styled from "styled-components";
import needImg from "../images/needImg.png";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ShowPublish = () => {
  const [img, setImg] = useState("");
  const [apiData, setApiData] = useState({
    name: "",
    stageName: "",
    runningTime: "",
    ageLimit: "",
  });
  const handleApiChange = (e) => {
    setApiData({ ...apiData, [e.target.name]: e.target.value });
  };

  const captureFile = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const file = e.target.files[0];
    setImg(file);
  };

  return (
    <>
      <TopCss>
        <TopLeft>
          <TopLeftCss>
            <UpperTitleArea>공연 등록</UpperTitleArea>
            <TicketTitle>
              <TextField
                name="name"
                type="text"
                label="공연 제목"
                placeholder="공연 제목을 적어주세요"
                variant="standard"
                value={apiData.name}
                onChange={handleApiChange}
                style={{ width: 600 }}
                inputProps={{
                  style: { fontSize: 36, fontWeight: "bold" },
                }} // font size of input text
                InputLabelProps={{ style: { fontSize: 20 } }} // font size of input label
              />
            </TicketTitle>
            <UnderTitle>
              <PosterArea>
                <Poster
                  src={img ? URL.createObjectURL(img) : needImg}
                  alt="등록 버튼을 눌러주세요."
                ></Poster>
              </PosterArea>
              <InfoWrapper>
                <div>
                  <div className="infoHeader">
                    <th>장소</th>
                    <th>공연 시간</th>
                    <th>관람 연령</th>
                  </div>
                  <div className="infoBody">
                    <td>
                      <TextField
                        name="stageName"
                        type="text"
                        label="장소"
                        variant="standard"
                        value={apiData.stageName}
                        onChange={handleApiChange}
                      />
                    </td>
                    <td>
                      <TextField
                        name="runningTime"
                        type="number"
                        label="공연시간(분)"
                        variant="standard"
                        value={apiData.runningTime}
                        onChange={handleApiChange}
                      />
                    </td>
                    <td>
                      <TextField
                        name="ageLimit"
                        type="number"
                        label="관람연령"
                        variant="standard"
                        value={apiData.ageLimit}
                        onChange={handleApiChange}
                      />
                    </td>
                  </div>
                </div>
              </InfoWrapper>
            </UnderTitle>
          </TopLeftCss>
        </TopLeft>
      </TopCss>
    </>
  );
};

export default ShowPublish;

const TopCss = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
`;

const TopLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopLeftCss = styled.div`
  width: 670px;
  height: 680px;
`;

const UpperTitleArea = styled.div`
  margin: 40px 40px 20px 0px;
  font-size: 36px;
  font-weight: 700;
`;

const TicketTitle = styled.h1`
  margin-left: 0px;
`;

const UnderTitle = styled.div`
  display: flex;
  justify-content: start;
`;

const PosterArea = styled.div`
  width: 300px;
  height: 400px;
  margin-top: 40px;
  background-color: #d5d8dc;
  border-radius: 15px;
`;

const Poster = styled.img`
  width: 296px;
  height: 396px;
  margin-left: 2px;
  margin-top: 2px;
  border-radius: 12px;
  margin-right: 20px;
`;

const SubmitButtonArea = styled.div`
  margin-top: 30px;
`;

const InfoWrapper = styled.div`
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 20px;

  & > div {
    display: flex;
  }

  & > div > .infoHeader {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 20px;
  }

  th {
    margin-bottom: 28px;
  }

  th,
  td {
    padding: 10px;
  }

  & > div > .infoBody {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`;
