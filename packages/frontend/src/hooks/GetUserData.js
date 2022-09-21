import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserDataServer } from "../actions/user";

const GetUserData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDataServer());
  }, []);
};

export default GetUserData;
