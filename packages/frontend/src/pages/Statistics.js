import React, { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import styled from "styled-components";
import Dropdown from "../components/Statistics/Dropdown";
ChartJS.register(ArcElement, Tooltip, Legend);

const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 30px;
  & > h1 {
    position: absolute;
    top: 40px;
    left: 15%;
  }
`;

const Statistics = () => {
  const chartJsDataByDate = useSelector(
    (state) => state.performance.chartJsDataByDate,
  );
  const [data1, setData1] = useState({
    labels: ["잔여 티켓", "판매된 티켓", "리셀중인 티켓"],
    datasets: [
      {
        data: [12, 19, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
        ],
      },
    ],
  });
  const [selected, setSelected] = useState("전체기간");
  const returnData = useCallback((a, b, c) => {
    return {
      labels: ["잔여 티켓", "판매된 티켓", "리셀중인 티켓"],
      datasets: [
        {
          data: [a, b, c],
          backgroundColor: [
            "rgba(255, 99, 132, 0.7)",
            "rgba(54, 162, 235, 0.7)",
            "rgba(255, 206, 86, 0.7)",
          ],
        },
      ],
    };
  }, []);
  const Change = useCallback(() => {
    setData1(returnData(20, 20, 10));
  }, []);

  useEffect(() => {
    setData1(
      returnData(
        chartJsDataByDate[selected].remainTicketCount,
        chartJsDataByDate[selected].saleTicketCount,
        chartJsDataByDate[selected].resellTicketCount,
      ),
    );
    return () => {};
  }, [selected]);

  return (
    <Layout>
      <h1>판매 현황</h1>
      <Dropdown selected={selected} setSelected={setSelected}></Dropdown>
      <Doughnut options={{ maintainAspectRatio: false }} data={data1} />
    </Layout>
  );
};

export default Statistics;
