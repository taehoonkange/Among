import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserDataServer } from "../actions/user";

const GetUserData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("hooks Test");
    dispatch(getUserDataServer());
  }, []);
  return <div>GetUserData</div>;
};

export default GetUserData;
