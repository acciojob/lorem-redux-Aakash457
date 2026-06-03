import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLorem } from "../actions/loremActions";

function Lorem() {
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector(
    (state) => state
  );

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>
    </div>
  );
}

export default Lorem;