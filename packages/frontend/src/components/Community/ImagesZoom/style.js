import styled, { createGlobalStyle } from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  z-index: 5000;
  inset: 0;
`;

export const Header = styled.header`
  height: 44px;
  background: white;
  position: relative;
  padding: 0;
  text-align: center;

  & > h1 {
    margin: 0;
    font-size: 17px;
    color: #333;
    line-height: 44px;
  }

  & > button {
    position: absolute;
    right: 0;
    top: 0;
    background-color: transparent;
    border: none;
    padding: 13px;
    line-height: 14px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
  }
`;

export const SlickWrapper = styled.div`
  height: calc(100% - 44px);
  background: #090909;
`;

export const ImgWrapper = styled.div`
  padding: 32px 0px;
  text-align: center;

  & > img {
    margin: 0 auto;
    max-height: 750px;
    min-height: 600px;
  }
`;

export const Indicator = styled.div`
  text-align: center;
  & > div {
    width: 75px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    background: #313131;
    display: inline-block;
    text-align: center;
    color: white;
    font-size: 15px;
  }
`;

export const Global = createGlobalStyle`
    .slick-slide {
        display: inline-block;
    }
`;
