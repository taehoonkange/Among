import React, { useEffect, useState, useRef, useCallback } from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import Kdy from "../images/kdy.jpeg";
import needImg from "../images/needImg.png";
import ether from "../images/ethereum.png";
import SettingModal from "../components/MyPage/SettingModal";
import { setOpen } from "../slice/settingModalSlice";
import { setUserName, setUserProfile } from "../slice/userDataSlice";
import faker from "faker";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import fetcher from "../fetcher";
import useSWR from "swr";
import axios from "../api";
import dayjs from "dayjs";
import GetUserData from "../hooks/GetUserData";
import ReactPaginate from "react-paginate";

import {
  getUserDataServer,
  getUserProfileNickname,
  getUserTicket,
  patchtUserProfileImage,
  patchtUserProfileImageName,
  patchUserProfileNickName,
  postUserProfileImage,
} from "../actions/user";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-avataaars-sprites";
import ClipLoader from "react-spinners/ClipLoader";

const avatar = createAvatar(style, {
  dataUri: true,
});

const MyPage = () => {
  // const { data: Nick } = useSWR("/user/profile/nickname", fetcher);
  // const { data: ImgSrc } = useSWR("/user/image", fetcher);
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 101),
  );
  const mounted = useRef(false);
  const [loading, setLoading] = useState(true);
  const [dummy, setDummy] = useState([1, 2, 3, 4, 5]);

  const dispatch = useDispatch();
  const settingModalOpen = useSelector((store) => store.settingModalOpen.open);
  const userProfile = useSelector((store) => store.userData.userProfile);
  const myPageMyTicket = useSelector((store) => store.userData.myPageMyTicket);
  // const userProfileName = useSelector(
  //   (store) => store.userData.userProfileName,
  // );
  const userType = useSelector((store) => store.userData.userType);
  const name = useSelector((store) => store.userData.userName);
  // useEffect(() => {
  //   dispatch(setUserName({ value: Nick?.nickname }));
  //   dispatch(setUserProfile({ value: ImgSrc?.img_src }));
  // }, [Nick, ImgSrc]);

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + 5;
    setCurrentItems(myPageMyTicket.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(myPageMyTicket.length / 5));
  }, [itemOffset, myPageMyTicket]);

  // Invoke when user click to request another page.
  const handlePageClick = useCallback(
    (event) => {
      const newOffset = (event.selected * 5) % myPageMyTicket.length;
      setItemOffset(newOffset);
    },
    [myPageMyTicket],
  );

  /**
   * DataUrl 을 이미지파일로 변경해주는 함수
   */
  const convertURLtoFile = async (url) => {
    console.log("1");
    const response = await fetch(url);
    const data = await response.blob();
    const metadata = { type: `image/png` };
    // const name = faker.name.findName();
    return new Promise((resolve, reject) => {
      resolve(new File([data], `DDDDDYYYYYKKKKK123.png`, metadata));
      reject("error");
    });
  };

  useEffect(() => {
    console.log(window.localStorage.getItem("randomImage"));
    /**
     * 마이페이지 최초 접속시 유저의 보유한 티켓정보, 유저의 닉네임, 유저의 프로필이미지를 GET 하는 함수
     */
    async function initGetData() {
      // userID 정보를 받고나서 user의 티켓의 정보를 받기 위해서 then 안에 넣어주었습니다.
      dispatch(getUserDataServer()).then(() => {
        console.log("11");
        dispatch(getUserTicket());
      });
      await dispatch(getUserProfileNickname()).then((state) => {
        console.log("하이");
        console.log(state);
        if (!state.payload.profile?.src) {
          convertURLtoFile(avatar).then((image) => {
            const imageFormData = new FormData();
            imageFormData.append("image", image);
            dispatch(postUserProfileImage(imageFormData)).then((state) => {
              console.log(state);
              window.localStorage.setItem("randomImage", `${avatar}`);
              dispatch(patchtUserProfileImageName(state.payload));
            });
          });
        }
        if (!state.payload.nickname?.nickname) {
          dispatch(patchUserProfileNickName(`귀한손님${randomNumber}`));
        }
      });
    }
    initGetData();
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);
  /**
   * 현재 유저의 프로필의 상태에 따라 이미지를 달리 return 함
   * 순서도를 그려놓았음 참고하기 바람.
   */
  const checkImageStatus = useCallback(() => {
    if (userProfile) {
      if (userProfile.src.slice(0, 18) === "DDDDDYYYYYKKKKK123") {
        if (!window.localStorage.getItem("randomImage")) {
          window.localStorage.setItem("randomImage", `${avatar}`);
          return avatar;
        } else {
          return window.localStorage.getItem("randomImage");
        }
      } else {
        return `http://localhost:3065/${userProfile.src}`;
      }
    } else {
      return avatar;
    }
  }, [userProfile]);

  if (loading) {
    return (
      <Layout>
        <ClipLoader color="rgb(95, 60, 250)" />
      </Layout>
    );
  }
  console.log(myPageMyTicket);
  return (
    <>
      <ConnectedContainer>
        {/* 배경 */}
        <img
          className="backgroundImg"
          src={`https://t1.kakaocdn.net/friends/prod/brand/201907_type2_2880.jpg`}
          alt=""
        />
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div className="profileImgLocation">
              <img
                className="profileSize"
                src={checkImageStatus()}
                // onError={({ currentTarget }) => {
                //   currentTarget.onerror = null; // prevents looping
                //   currentTarget.src = "images/MetaMask_Fox.svg.png";
                // }}
                alt=""
                onClick={() => {
                  dispatch(setOpen({ value: true }));
                }}
              />
            </div>
          </Grid>
        </Grid>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "0.5rem",
          }}
        >
          {/* 닉네임 */}
          <UserInfo>
            <h1>{name ? name : `귀한 손님${randomNumber}`}</h1>
          </UserInfo>
          {/* 지갑 주소 */}
          <div className="dappAddressWrapper">
            <img className="etherSize" src={ether} alt="eth" />
            <div className="dappAddressLength">
              {window.ethereum.selectedAddress}
            </div>
          </div>
          {window.localStorage.getItem("userType") !== "INFLUENCER" ? (
            <ShowRegister to="/InfluencerRegister">
              인플루언서 등록
            </ShowRegister>
          ) : (
            <ShowRegister to="/ShowPublish">공연 등록</ShowRegister>
          )}
        </div>
      </ConnectedContainer>

      <>
        <MyPageContainer>
          <ReactPaginateWrapper>
            <h2>나의 티켓</h2>
            <ReactPaginateBox
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={0}
              marginPagesDisplayed={0}
              pageCount={pageCount}
              previousLabel="<"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel=""
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
              className="hey"
            ></ReactPaginateBox>
          </ReactPaginateWrapper>
          <div>
            {currentItems.map((el) => {
              console.log(el);
              return (
                <div>
                  <img
                    className="myPage_ticket_image"
                    alt=""
                    src={`http://localhost:3065/${el.GetImg[0].src}`}
                  ></img>
                  <div className="myPage_ticket_date">
                    {dayjs(el.day).format("YYYY.MM.DD")}
                  </div>
                  <div className="myPage_ticket_desc">{el.description}</div>
                </div>
              );
            })}
          </div>
        </MyPageContainer>
        <MyPageContainer>
          <h2>판매 티켓</h2>
          <div>
            {dummy.map((el) => {
              return (
                <div>
                  <img
                    className="myPage_ticket_image"
                    alt=""
                    src={`http://ticketimage.interpark.com/TCMS4/Main/201903/TicketTodayNew_TicketTodayDrama_5c9237a5-782b-4c0d-8beb-2e70ebe260a0.jpg`}
                  ></img>
                  <div className="myPage_ticket_date">
                    {/* {dayjs(el.day).format("YYYY.MM.DD")} */}
                  </div>
                  <div className="myPage_ticket_desc">
                    2022 10년 연속 1위 연극 옥탑방고양이-틴틴홀
                  </div>
                </div>
              );
            })}
          </div>
        </MyPageContainer>
      </>
      {settingModalOpen && (
        <SettingModal setLoading={setLoading}></SettingModal>
      )}
    </>
  );
};

export default MyPage;

const ConnectedContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 2rem;
  padding-bottom: 40px;
  border-bottom: 2px solid #e9e9f0;

  & .backgroundImg {
    height: 300px;
    width: 100%;
    object-fit: cover;
  }

  & .profileImgLocation {
    display: flex;
    position: absolute;
    top: 275px;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & .profileSize {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    background: grey;
    cursor: pointer;
  }

  & .dappAddressWrapper {
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border: 1px solid grey;
    border-radius: 20px;
    padding: 0.5rem;
    margin-top: 10px;
    display: flex;
  }

  & .etherSize {
    width: 20px;
    height: 20px;
  }

  & .dappAddressLength {
    width: 180px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const UserInfo = styled.div`
  border: none;
  margin-top: 50px;
`;

const MyPageContainer = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  height: 500px;
  border-bottom: 2px solid #e9e9f0;

  & > h2 {
    margin-top: 20px;
    padding-left: 4%;
  }

  & > div {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fill, minmax(20%, auto));
  }

  & > div > div {
    width: 300px;
    height: 400px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;
  }

  & .myPage_ticket_image {
    width: 200px;
    height: 300px;
    transition: transform 350ms;
  }

  & .myPage_ticket_image:hover {
    transform: scale(1.05);
  }
  & .myPage_ticket_date {
    width: 200px;
    font-weight: 700;
    margin-top: 15px;
  }

  & .myPage_ticket_desc {
    width: 200px;
    margin-top: 15px;
  }
`;

const ShowRegister = styled(Link)`
  background: rgb(95, 60, 250);
  margin-top: 20px;
  padding: 10px 20px 10px 20px;
  color: white;
  border-radius: 10px;
`;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ReactPaginateWrapper = styled.span`
  padding: 0px 3%;
  display: flex;
  justify-content: space-between;
`;

const ReactPaginateBox = styled(ReactPaginate)`
  display: flex;
  cursor: pointer;
  a {
    text-align: center;
    width: 100%;
    font-weight: 700;
  }
  & > .page-item {
    /* visibility: hidden; */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #eef2f6;

    line-height: 28px;
    margin: 0 5px;
    min-width: 28px;
    font-size: 16px;
    font-weight: 600;
  }
  & > .page-item.active {
    display: none;
    color: white;
  }
  & > .active {
    background-color: #545c65;
  }
  & > .active a {
    color: white;
  }
`;
