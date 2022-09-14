import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import {
  performanceUploadImages,
  uploadImages,
  performanceResgister,
  performanceSeats,
  getPerformance,
  getPerformanceDetail,
  getSeatsData,
} from "../actions/performance";
import { data } from "./data";
const initialState = {
  imagePaths: [],
  seats: data,
  ticketSeats: [],
  performance: [],
  performanceId: 0,
  performanceDetail: [],
  seatsData: [],
  daySeatsData: {},
  userSelectDay: "",
  seatDataRemain: {},
};

const performanceSlice = createSlice({
  name: "performance",
  initialState,
  reducers: {
    resetImagePaths: (state, { payload }) => {
      state.imagePaths = [];
    },
    setSeatsData: (state, { payload }) => {
      state.seats = [
        ...state.seats.slice(0, payload.i),
        payload.value,
        ...state.seats.slice(payload.i + 1),
      ];
      console.log(state.seats);
      return state;
    },
    resetSeatsData: (state) => {
      state.seats = data;
    },
    setTicketSeats: (state, { payload }) => {
      state.ticketSeats = [...state.ticketSeats, payload.value];
    },
    resetTicketSeats: (state, { payload }) => {
      state.ticketSeats = [];
    },
    setTicketSeatsMinus: (state, { payload }) => {
      state.ticketSeats = state.ticketSeats.filter(
        (seat) => seat.number !== payload.i,
      );
    },
    setPerformanceId: (state, { payload }) => {
      state.performanceId = payload.value;
    },
    resetPerformanceId: (state, { payload }) => {},
    setUserSelectDay: (state, { payload }) => {
      state.userSelectDay = payload.value;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(performanceUploadImages.pending, (state) => {})
      .addCase(performanceUploadImages.fulfilled, (state, action) => {
        state.imagePaths = [...state.imagePaths, action.payload];
        console.log(state.imagePaths);
      })
      .addCase(performanceUploadImages.rejected, (state, action) => {})
      .addCase(uploadImages.pending, (state) => {})
      .addCase(uploadImages.fulfilled, (state, action) => {
        // state.uploadImagesLoading = false;
        // state.uploadImagesDone = true;
        state.imagePaths = [...state.imagePaths, action.payload];
      })
      .addCase(uploadImages.rejected, (state, action) => {})
      .addCase(performanceResgister.pending, (state) => {})
      .addCase(performanceResgister.fulfilled, (state, action) => {
        state.performance = action.payload;
        return state;
      })
      .addCase(performanceResgister.rejected, (state, action) => {
        throw new Error("기분나쁜일이 생겼어요");
      })
      .addCase(performanceSeats.pending, (state) => {})
      .addCase(performanceSeats.fulfilled, (state, action) => {})
      .addCase(performanceSeats.rejected, (state, action) => {})
      .addCase(getPerformance.pending, (state) => {})
      .addCase(getPerformance.fulfilled, (state, action) => {
        state.performance = action.payload;
      })
      .addCase(getPerformance.rejected, (state, action) => {})
      .addCase(getPerformanceDetail.pending, (state) => {})
      .addCase(getPerformanceDetail.fulfilled, (state, action) => {
        state.performanceDetail = action.payload;
      })
      .addCase(getPerformanceDetail.rejected, (state, action) => {})
      .addCase(getSeatsData.pending, (state) => {})
      .addCase(getSeatsData.fulfilled, (state, action) => {
        state.seatsData = action.payload;
        let sections = {};
        let seatDataRemaining = {};
        state.seatsData.forEach((el) => {
          const monthDate = dayjs(el.day).format("YYYY-MM-DD");
          if (Array.isArray(sections[monthDate])) {
            sections[monthDate].push(el);
          } else {
            sections[monthDate] = [el];
          }
        });
        state.daySeatsData = sections;
        for (let key in sections) {
          let reportId = {};
          let color = {};
          const targetDate = sections[key];
          for (let i = 0; i < targetDate.length; i++) {
            if (reportId.hasOwnProperty(targetDate[i].status)) {
              reportId[targetDate[i].status] += 1;
            } else {
              reportId[targetDate[i].status] = 1;
            }

            if (!color.hasOwnProperty(targetDate[i].status)) {
              color[targetDate[i].status] = targetDate[i].color;
            }
          }
          let tempArr = [];
          for (let seatClass in reportId) {
            let temp = {};
            temp["status"] = seatClass;
            temp["count"] = reportId[seatClass];
            temp["color"] = color[seatClass];
            tempArr.push(temp);
          }
          seatDataRemaining[key] = tempArr;
        }
        console.log(seatDataRemaining);
        state.seatDataRemain = seatDataRemaining;
        // return state;
      })
      .addCase(getSeatsData.rejected, (state, action) => {}),
});

export const {
  setSeatsData,
  resetSeatsData,
  setTicketSeats,
  setTicketSeatsMinus,
  resetTicketSeats,
  resetImagePaths,
  setPerformanceId,
  resetPerformanceId,
  setUserSelectDay,
} = performanceSlice.actions;
export default performanceSlice.reducer;
