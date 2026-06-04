import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLorem } from "../actions/loremActions";

function Lorem() {
  const dispatch = useDispatch();

  const { loading, posts } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  if (loading) {
    return <h4>Loading...</h4>;
  }

  return (
    <div>
      <h1>A short Naration of Lorem Ipsum</h1>

      <h4>
        Below Contains A title and Body gotten froma random API, Please take
        your time to Review
      </h4>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <p>
              <strong>Title</strong> {post.title}
            </p>

            <p>
              <strong>Body</strong> {post.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lorem;
