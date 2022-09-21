import React from "react";
import QrReader from "react-qr-reader";
import _ from "lodash";
import { Container, Card, CardContent, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { patchUseTicket } from "../actions/ticketResell";
const QRcodeReader = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleErrorWebCam = (error) => {
    console.log(error);
  };

  /**
   * qr 코드를 인식하는 함수 입니다.
   * qr 코드 인식시 api 요청이 여러번 가기때문에 쓰로틀링 처리를 해주었습니다.
   */
  const debounceOnChange = _.throttle((result) => {
    let check = JSON.parse(result);
    // qr 코드가 찍히지 않을 경우에는 check에 null 이 들어갑니다.
    // qr 코드가 찍히면 Json stringify 로 된 문자열을 변환하여 티켓ID를 얻습니다.
    if (check === null) {
    } else {
      dispatch(patchUseTicket(check));
      window.alert("인증되었습니다.");
    }
  }, 2000);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container className={classes.conatiner}>
        <Card className={classes.wrapper}>
          <h2 className={classes.title}>QR 코드 인증</h2>
          <CardContent>
            <Grid container style={{ justifyContent: "center", width: "100%" }}>
              <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                <QrReader
                  delay={300}
                  style={{ width: "100%", justifyContent: "center" }}
                  onError={handleErrorWebCam}
                  onScan={debounceOnChange}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  conatiner: {
    marginTop: 10,
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(90deg, rgb(254, 224, 255) 0%, rgb(218, 235, 255) 100%)",
    color: "rgb(95, 60, 250)",
    padding: 20,
  },
  btn: {
    marginTop: 10,
    marginBottom: 20,
  },
}));

export default QRcodeReader;
