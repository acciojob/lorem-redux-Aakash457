export const FETCH_LOREM_REQUEST = "FETCH_LOREM_REQUEST";
export const FETCH_LOREM_SUCCESS = "FETCH_LOREM_SUCCESS";
export const FETCH_LOREM_FAILURE = "FETCH_LOREM_FAILURE";

export const fetchLorem = () => {
  return function (dispatch) {
    dispatch({ type: FETCH_LOREM_REQUEST });

    fetch("https://api.lorem.com/ipsum")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        dispatch({
          type: FETCH_LOREM_SUCCESS,
          payload: data,
        });
      })
      .catch(function (error) {
        dispatch({
          type: FETCH_LOREM_FAILURE,
          payload: error.message,
        });
      });
  };
};
