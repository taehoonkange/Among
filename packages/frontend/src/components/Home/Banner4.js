import React from "react";
import "./Banner.css";
const Banner4 = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(rgb(239, 238, 254) 3%, rgb(240, 244, 252) 97%)",
      }}
      className="SliderWrapper"
    >
      <div
        style={{ marginTop: "12%", marginLeft: "50%" }}
        className="textWrapper"
      >
        <div class="test">다른 팬들과</div>
        <div style={{ marginTop: "15px" }} class="test">
          <span>자유롭게 </span>
          <span class="cl">티켓 거래 </span>
          <span>해보세요.</span>
        </div>
        <div className="disc">비싼 암표걱정 이제 그만!</div>
        <div className="disc2">합리적인 가격으로 티켓을 거래해보세요.</div>
      </div>
    </div>
  );
};

export default Banner4;
