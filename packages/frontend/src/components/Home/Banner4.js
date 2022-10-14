import React, { useEffect } from "react";
import "./Banner.css";
import ticketResell from "../../images/ticketResell.png";
import { useRef } from "react";
const Banner4 = ({ section2 }) => {
  const ref = useRef();
  useEffect(() => {
    const sectionRef = ref.current;
    if (section2) {
      sectionRef.style.animation =
        "leftSlide 1500ms cubic-bezier(0.4, 0, 0.2, 1)";
      sectionRef.style.opacity = "1";
    }
  }, [section2]);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        ref={ref}
        style={{
          width: "100%",
          opacity: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "12%",
        }}
        className="SliderWrapper"
      >
        <img
          style={{
            marginTop: "6%",
            width: "600px",
            height: "400px",
            borderRadius: "20px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          alt=""
          src={ticketResell}
        ></img>
        <div
          style={{ marginTop: "12%", marginBottom: "12%" }}
          className="textWrapper"
        >
          <div class="test">다른 팬들과</div>
          <div style={{ marginTop: "15px", width: "600px" }} class="test">
            <span>자유롭게 </span>
            <span class="cl">티켓 거래 </span>
            <span>해보세요.</span>
          </div>
          <div className="disc">비싼 암표걱정 이제 그만!</div>
          <div className="disc2">합리적인 가격으로 티켓을 거래해보세요.</div>
        </div>
      </div>
    </div>
  );
};

export default Banner4;
