import React, { useRef, useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import {
  resetSeatsData,
  setTicketSeatsMinus,
  setSeatsData,
  setTicketSeats,
  resetTicketSeats,
} from "../../slice/performanceSlice";
import { useDispatch, useSelector } from "react-redux";
const seatColor = ["#FA58F4", "#FFD400", "#01DF3A"];
const sold = "#D8D8D8";
const unsold = "#01DF3A";
const clicked = "#FA58F4";
const cancelled = "#000000";
const myClicked = "#6495ED";
const seatsImage = new Image();
const scale = 1;
const seatLength = 30;
seatsImage.src =
  "https://user-images.githubusercontent.com/62373865/189487645-d544aace-d69c-413c-a3bd-a9e776569f80.jpg";

const Layout = styled.div`
  display: flex;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
`;
const RestSeatWrapper = styled.div`
  width: 140px;
  display: flex;
  flex-direction: column;
`;

const RestSeatTitle = styled.div`
  padding: 10px;
  font-weight: 700;
  border-bottom: 1px solid #808080;
`;

const RestSeatInfo = styled.div`
  cursor: pointer;
  padding: 10px;
  display: flex;
  background: ${(props) =>
    props.index === props.seatColorIndex &&
    "linear-gradient(90deg,rgb(254, 224, 255) 0%,rgb(218, 235, 255) 100%);"};
  &:hover {
    background: linear-gradient(
      90deg,
      rgb(254, 224, 255) 0%,
      rgb(218, 235, 255) 100%
    );
  }
`;

const SeatInfomation = ({ setSeatData, seatData }) => {
  const dispatch = useDispatch();
  const [seatColorIndex, setSeatColorIndex] = useState(-1);
  const seats = useSelector((state) => state.performance.seats);
  const canvasRef = useRef();
  const ctx = useRef(null);
  const draw = () => {
    const canvas = canvasRef.current;
    ctx.current.clearRect(0, 0, canvas.width / 1, canvas.height / 1);
    ctx.current.drawImage(seatsImage, 0, 0, canvas.width, canvas.height);
    seats.forEach(function (seat) {
      ctx.current.fillStyle = seat.color;
      ctx.current.fillRect(seat.x, seat.y, 10, 10);
      // ctx.fillRect(100, 100, 10, 10);
    });
  };

  const mouseUp = useCallback(
    (e) => {
      e.stopPropagation();

      const arr = seats;
      const length = seats.length;
      let seat;
      let row = 0;
      let col = 0;

      for (let i = 0; i < length; i += 1) {
        // console.log("X", e.offsetX);
        // console.log("Y", e.offsetY);
        if (seatColorIndex === -1) {
          window.alert("좌석색깔을 선택해주세요.");
          return;
        }

        seat = seats[i];
        if (i % 10 === 0) {
          row = 0;
          if (i !== 0) {
            col++;
          }
        }
        if (
          e.offsetX > seat.x * scale + 40 + 15 * row &&
          e.offsetX < seat.x * scale + 55 + 15 * row &&
          e.offsetY > seat.y * scale + 50 + 20 * col &&
          e.offsetY < seat.y * scale + 70 + 20 * col
        ) {
          if (seat.status === "none") {
            if (seatData[seatColorIndex].seats === 0) {
              window.alert("더 이상 좌석을 선택할 수 없습니다.");
              return;
            }
            let ticket = {
              class: seatData[seatColorIndex].grade,
              price: seatData[seatColorIndex].price,
              number: i,
              x: seat.x,
              y: seat.y,
              status: seatData[seatColorIndex].grade,
              color: seatColor[seatColorIndex],
            };
            dispatch(setTicketSeats({ value: ticket }));

            let temp = {
              grade: seatData[seatColorIndex].grade,
              price: seatData[seatColorIndex].price,
              seats: seatData[seatColorIndex].seats - 1,
              id: seatData[seatColorIndex].id,
            };
            setSeatData([
              ...seatData.slice(0, seatColorIndex),
              temp,
              ...seatData.slice(seatColorIndex + 1),
            ]);

            let target = {
              ...seats[i],
              color: seatColor[seatColorIndex],
              status: "select",
            };
            dispatch(setSeatsData({ i: i, value: target }));
          } else {
            dispatch(setTicketSeatsMinus({ value: i }));
            let temp = {
              grade: seatData[seatColorIndex].grade,
              price: seatData[seatColorIndex].price,
              seats: seatData[seatColorIndex].seats + 1,
              id: seatData[seatColorIndex].id,
            };
            setSeatData([
              ...seatData.slice(0, seatColorIndex),
              temp,
              ...seatData.slice(seatColorIndex + 1),
            ]);
            let target = { ...seats[i], color: "#D8D8D8", status: "none" };
            dispatch(setSeatsData({ i: i, value: target }));
          }
        }
        row++;
      }
    },
    [seatColorIndex, setSeatsData, seatData],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.style.width = "530px";
    canvas.style.height = "300px";
    ctx.current = canvas.getContext("2d");
    draw();
    // clickEvent();
    // socket.emit("joinRoom", "A");
    canvas.addEventListener("mouseup", mouseUp);
    return () => {
      canvas.removeEventListener("mouseup", mouseUp);
    };
  }, [seats, seatColorIndex]);

  useEffect(() => {
    return () => {
      dispatch(resetSeatsData());
      dispatch(resetTicketSeats());
      console.log("이게 왜 실행되냐");
    };
  }, []);
  return (
    <Layout>
      <canvas
        style={{ borderBottomLeftRadius: "10px", borderTopLeftRadius: "10px" }}
        ref={canvasRef}
      />
      <RestSeatWrapper>
        <RestSeatTitle>잔여석</RestSeatTitle>
        {seatData?.map((seat, index) => {
          return (
            <RestSeatInfo
              index={index}
              seatColorIndex={seatColorIndex}
              onClick={() => {
                setSeatColorIndex(index);
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: seatColor[index],
                  alignSelf: "center",
                  marginRight: "10px",
                }}
              ></div>
              <div
                style={{
                  fontWeight: "600",
                }}
              >
                {seat.grade}석
              </div>
              <div
                style={{
                  color: "#808080",
                  fontSize: "14px",
                  marginLeft: "10px",
                  alignSelf: "flex-end",
                }}
              >
                {seat.seats}석
              </div>
            </RestSeatInfo>
          );
        })}
      </RestSeatWrapper>
    </Layout>
  );
};

export default SeatInfomation;
