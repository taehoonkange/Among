import React, { useRef, useEffect, useState } from "react";
import { data } from "./data";
import styled from "styled-components";
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
`;
const RestSeatWrapper = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
`;

const RestSeatTitle = styled.div`
  padding: 10px;
  font-weight: 700;
  border-bottom: 1px solid #808080;
`;

const RestSeatInfo = styled.div`
  padding: 10px;
  display: flex;
  background: "red";
`;

const SeatInfomation = () => {
  const [seats, setSeats] = useState(data);
  const canvasRef = useRef();
  const ctx = useRef(null);
  const draw = () => {
    const canvas = canvasRef.current;
    ctx.current.clearRect(0, 0, canvas.width / 1, canvas.height / 1);
    ctx.current.drawImage(seatsImage, 0, 0, canvas.width, canvas.height);
    seats.forEach(function (x) {
      ctx.current.fillStyle = x.color;
      ctx.current.fillRect(x.point.x, x.point.y, 10, 10);
      // ctx.fillRect(100, 100, 10, 10);
    });
  };

  const mouseUp = (e) => {
    e.stopPropagation();

    const arr = seats;
    const length = seats.length;
    let seat;
    let row = 0;
    let col = 0;
    for (let i = 0; i < length; i += 1) {
      console.log("X", e.offsetX);
      console.log("Y", e.offsetY);

      seat = seats[i];
      if (i % 10 === 0) {
        row = 0;
        if (i !== 0) {
          col++;
        }
      }
      if (
        e.offsetX > seat.point.x * scale + 40 + 15 * row &&
        e.offsetX < seat.point.x * scale + 55 + 15 * row &&
        e.offsetY > seat.point.y * scale + 50 + 20 * col &&
        e.offsetY < seat.point.y * scale + 70 + 20 * col
      ) {
        console.log(i);
        if (seat.status === "sold") {
          let target = { ...seats[i], color: clicked, status: "unsold" };
          setSeats([...seats.slice(0, i), target, ...seats.slice(i + 1)]);
        } else {
          let target = { ...seats[i], color: sold, status: "sold" };
          setSeats([...seats.slice(0, i), target, ...seats.slice(i + 1)]);
        }
      }
      row++;
    }
  };

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
  }, [seats]);

  return (
    <Layout>
      <canvas ref={canvasRef} />
      <RestSeatWrapper>
        <RestSeatTitle>잔여석</RestSeatTitle>
        <RestSeatInfo>
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "#FA58F4",
              alignSelf: "center",
              marginRight: "10px",
            }}
          ></div>
          <div
            style={{
              fontWeight: "600",
            }}
          >
            VIP석
          </div>
          <div
            style={{
              color: "#808080",
              fontSize: "14px",
              marginLeft: "10px",
              alignSelf: "flex-end",
            }}
          >
            10석
          </div>
        </RestSeatInfo>
      </RestSeatWrapper>
    </Layout>
  );
};

export default SeatInfomation;
