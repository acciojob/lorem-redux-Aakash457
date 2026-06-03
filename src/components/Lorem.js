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
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>A short Naration of Lorem Ipsum</h1>

      <p>
        Below Contains A title and Body gotten from a random API, Please take
        your time to Review
      </p>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <p>
              <b>Title</b> {post.title}
            </p>

            <p>
              <b>Body</b> {post.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lorem;
