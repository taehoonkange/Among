import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { CommnunityCheckStatus } from "../actions/post";

const GetUserStatus = (communityId) => {
  const dispatch = useDispatch();
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      dispatch(CommnunityCheckStatus({ communityId: communityId }));
      // dispatch(loadPosts());
    }
    // dispatch(getUserDataServer());
  }, [communityId]);
};

export default GetUserStatus;
