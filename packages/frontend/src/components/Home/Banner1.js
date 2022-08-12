import React from "react";
import "./Banner.css";
import arrow from "../../images/right-arrow.png";

const Banner1 = () => {
  return (
    <div className="SliderWrapper">
      <div className="textWrapper">
        <div class="test">NFT와 티켓의 결합</div>
        <div style={{ marginTop: "15px" }} class="test">
          <span>당신의 </span>
          <span class="cl">인플루언서 </span>
          <span>에게 다가가세요.</span>
        </div>
        <div className="disc">Among은 행사티켓을 판매하고</div>
        <div className="disc2">NFT로 거래할 수 있는 웹마켓 플랫폼입니다.</div>
        <div className="linkWrapper">
          <img
            style={{ width: "30", height: "30px" }}
            alt="화살표이미지"
            src={arrow}
          ></img>
          <div className="cl arrowText">행사 구경하러가기</div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
