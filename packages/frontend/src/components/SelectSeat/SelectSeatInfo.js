import React, { useRef, useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import {
  resetSeatsData,
  setTicketSeatsMinus,
  setSeatsData,
  setTicketSeats,
  resetTicketSeats,
  setDaySeatsData,
  setDaySeatsDataOriginColor,
  setSeatDataRemain,
  setSaleTicketPlusIdList,
  resetSaleTicketIdList,
  setSaleTicketMinusIdList,
} from "../../slice/performanceSlice";
import { useDispatch, useSelector } from "react-redux";
const seatColor = ["#FA58F4", "#6495ED", "#01DF3A"];
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

const SelectSeatInfo = ({
  setSeatData,
  seatData,
  selectSeatNumber,
  setSelcetSeatNumber,
}) => {
  const daySeatsData = useSelector((state) => state.performance.daySeatsData);
  const userSelectDay = useSelector((state) => state.performance.userSelectDay);
  const seatDataRemain = useSelector(
    (state) => state.performance.seatDataRemain,
  );

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
  const drawSelectSeat = () => {
    // const canvas = canvasRef.current;
    // ctx.current.drawImage(seatsImage, 0, 0, canvas.width, canvas.height);

    daySeatsData[userSelectDay]?.forEach(function (seat) {
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
        // if (seatColorIndex === -1) {
        //   window.alert("좌석색깔을 선택해주세요.");
        //   return;
        // }

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
          daySeatsData[userSelectDay].map((el) => {
            if (i === el.seatNumber && el.color === "rgb(95, 60, 250)") {
              dispatch(
                setDaySeatsDataOriginColor({ i: i, day: userSelectDay }),
              );
              dispatch(setSaleTicketMinusIdList({ value: el.id }));
              dispatch(
                setSeatDataRemain({
                  type: "plus",
                  day: userSelectDay,
                  status: el.status,
                }),
              );
              let temp = selectSeatNumber[el.status];
              temp = { ...temp, count: temp.count - 1 };
              setSelcetSeatNumber({ ...selectSeatNumber, [el.status]: temp });
            } else if (i === el.seatNumber) {
              console.log(el);
              dispatch(setSaleTicketPlusIdList({ value: el.id }));

              dispatch(
                setSeatDataRemain({
                  type: "minus",
                  day: userSelectDay,
                  status: el.status,
                }),
              );
              dispatch(setDaySeatsData({ i: i, day: userSelectDay }));
              let temp = selectSeatNumber[el.status];
              console.log(temp);
              temp = { ...temp, count: temp.count + 1 };
              setSelcetSeatNumber({ ...selectSeatNumber, [el.status]: temp });
            }
          });
        }
        row++;
      }
    },
    [selectSeatNumber, daySeatsData, seatColorIndex, setSeatsData, seatData],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.style.width = "530px";
    canvas.style.height = "300px";
    ctx.current = canvas.getContext("2d");
    draw();
    drawSelectSeat();
    // clickEvent();
    // socket.emit("joinRoom", "A");
    canvas.addEventListener("mouseup", mouseUp);
    return () => {
      canvas.removeEventListener("mouseup", mouseUp);
    };
  }, [selectSeatNumber, daySeatsData, seats, seatColorIndex]);

  useEffect(() => {
    return () => {
      dispatch(resetSeatsData());
      dispatch(resetTicketSeats());
      dispatch(resetSaleTicketIdList());
      console.log("이게 왜 실행되냐");
    };
  }, []);

  useEffect(() => {
    let ans = {};
    seatDataRemain[userSelectDay]?.map((seat) => {
      let temp = { count: 0, color: seat.color };
      ans[seat.status] = temp;
    });
    console.log(ans);
    for (let key in ans) {
      const value = ans[key];
      console.log(value);
    }
    setSelcetSeatNumber(ans);
  }, []);

  const SeatCount = useCallback(() => {
    let test = [];
    for (let key in selectSeatNumber) {
      const value = selectSeatNumber[key];
      if (value.count > 0) {
        test.push(
          <RestSeatInfo index={key} seatColorIndex={seatColorIndex}>
            <div
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: value.color,
                alignSelf: "center",
                marginRight: "10px",
              }}
            ></div>
            <div
              style={{
                fontWeight: "600",
              }}
            >
              {key}석
            </div>
            <div
              style={{
                color: "#808080",
                fontSize: "14px",
                marginLeft: "10px",
                alignSelf: "flex-end",
              }}
            >
              {value.count}석
            </div>
          </RestSeatInfo>,
        );
      }
    }
    return test;
  }, [selectSeatNumber]);
  return (
    <Layout>
      <canvas
        style={{ borderBottomLeftRadius: "10px", borderTopLeftRadius: "10px" }}
        ref={canvasRef}
      />
      <RestSeatWrapper>
        <RestSeatTitle>잔여석</RestSeatTitle>
        {seatDataRemain[userSelectDay]?.map((seat, index) => {
          return (
            <RestSeatInfo index={index} seatColorIndex={seatColorIndex}>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: seat.color,
                  alignSelf: "center",
                  marginRight: "10px",
                }}
              ></div>
              <div
                style={{
                  fontWeight: "600",
                }}
              >
                {seat.status}석
              </div>
              <div
                style={{
                  color: "#808080",
                  fontSize: "14px",
                  marginLeft: "10px",
                  alignSelf: "flex-end",
                }}
              >
                {seat.count}석
              </div>
            </RestSeatInfo>
          );
        })}
      </RestSeatWrapper>
      <RestSeatWrapper>
        <RestSeatTitle>선택좌석</RestSeatTitle>
        {SeatCount()}
      </RestSeatWrapper>
    </Layout>
  );
};

export default SelectSeatInfo;
