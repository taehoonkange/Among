import React, { useEffect, useRef } from "react";
import "./Banner.css";
import feed from "../../images/FeedImg.png";
const Banner5 = ({ section3 }) => {
  const ref = useRef();
  const img = useRef();
  const text = useRef();
  useEffect(() => {
    const sectionRef = ref.current;
    const imgRef = img.current;
    const textRef = text.current;
    if (section3) {
      sectionRef.style.animation =
        "RightSlide 1500ms cubic-bezier(0.4, 0, 0.2, 1)";
      imgRef.style.opacity = "1";
      imgRef.style.animation = "Oppa 1500ms cubic-bezier(0.4, 0, 0.2, 1)";
      textRef.style.opacity = "1";
      textRef.style.animation = "Oppa 1500ms cubic-bezier(0.4, 0, 0.2, 1)";
    }
  }, [section3]);
  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: "2%",
        background:
          "linear-gradient(rgb(239, 238, 254) 3%, rgb(240, 244, 252) 97%)",
      }}
      className="SliderWrapper"
    >
      <img
        style={{
          width: "600px",
          height: "500px",
          borderRadius: "20px",
          opacity: "0",
        }}
        alt=""
        ref={img}
        src={feed}
      ></img>
      <div ref={text} style={{ opacity: "0" }} className="textWrapper">
        <div class="test">최고의</div>
        <div style={{ marginTop: "15px" }} class="test">
          <span>커뮤니케이션 공간 </span>
        </div>
        <div style={{ marginTop: "15px" }} class="test cl">
          피드
        </div>
        <div className="disc">
          인플루언서의 팬덤과 소통할 수 있는 공간입니다.
        </div>
        <div className="disc2">
          물론, 인플루언서의 게시글도 확인할 수 있습니다.
        </div>
      </div>
    </div>
  );
};

export default Banner5;
