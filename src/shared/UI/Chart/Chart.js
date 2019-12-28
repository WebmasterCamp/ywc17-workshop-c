import React from "react";
import { Bar } from "react-chartjs-2";

import styles from "./Chart.module.css";

const data = {
  labels: ["ประวัติความเป็นมา","หน่วยเศรษฐกิจ", "ระบบเศรษฐกิจ"],
  datasets: [
    {
      label: "จำนวนข้อที่ตอบถูก",
      backgroundColor: "rgba(102, 204, 184, .2)",
      borderColor: "rgba(102, 204, 184, 1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(102, 204, 184, .4)",
      hoverBorderColor: "rgba(102, 204, 184, 1)",
      data: [1, 0, 1]
    },
    {
      label: "จำนวนข้อที่ตอบผิด",
      backgroundColor: "rgba(239, 102, 159, .2)",
      borderColor: "rgba(239, 102, 159, 1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(239, 102, 159, .4)",
      hoverBorderColor: "rgba(239, 102, 159, .1)",
      data: [0, 1, 2]
    }
  ]
};

export default function Chart() {
  return (
    <Bar
      data={data}
      width={100}
      height={50}
    />
  );
}
