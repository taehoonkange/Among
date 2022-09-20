import React from "react";
import { QrReader } from "react-qr-reader";
import _ from "lodash";
const QRcodeReader = () => {
  const handleErrorWebCam = (error) => {
    console.log(error);
  };
  const debounceOnChange = _.throttle((result) => {
    let test = JSON.parse(result);
    console.log(test);
    if (test === null) {
    } else {
      window.alert("인증되었습니다.");
    }
  }, 2000);
  return (
    <QrReader
      delay={300}
      style={{ width: "100%" }}
      onError={handleErrorWebCam}
      onScan={debounceOnChange}
    />
  );
};

export default QRcodeReader;
