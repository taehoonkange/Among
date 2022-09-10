import axios from "../api";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.withCredentials = true; // front, backend 간 쿠키공유
