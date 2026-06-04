import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLorem } from "../actions/loremActions";

function Lorem() {
  const dispatch = useDispatch();
  const { loading, posts } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  const post = posts[0];

  return (
    <div>
      <h1>A short Naration of Lorem Ipsum</h1>
      <h4>
        Below Contains A title and Body gotten froma random API, Please take
        your time to Review
      </h4>

      <ul>
        <li>
          <p id="1" className="id">{post ? post.id : ""}</p>
          <p className="title">
            {loading || !post ? "Title :Loading tiltes" : `Title :${post.title}`}
          </p>
          <p className="body">
            {loading || !post ? "Body :Loading Body" : `Body :${post.body}`}
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Lorem;
