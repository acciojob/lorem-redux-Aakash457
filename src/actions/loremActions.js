export const FETCH_LOREM_REQUEST = "FETCH_LOREM_REQUEST";
export const FETCH_LOREM_SUCCESS = "FETCH_LOREM_SUCCESS";
export const FETCH_LOREM_FAILURE = "FETCH_LOREM_FAILURE";

export const fetchLorem = () => {
  return function (dispatch) {
    dispatch({ type: "FETCH_REQUEST" });

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: data.slice(0, 6)
        });
      })
      .catch(() => {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: []
        });
      });
  };
};