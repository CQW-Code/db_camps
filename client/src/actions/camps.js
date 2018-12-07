import axios from "axios";

export const CAMPS = "CAMPS";
export const ADD_CAMP = "ADD_CAMP";
export const UPDATE_CAMP = "UPDATE_CAMP";
export const DELETE_CAMP = "DELETE_CAMP";

export const getCamps = cb => {
  return dispatch => {
    axios
      .get("/api/camps")
      .then(res => dispatch({ type: CAMPS, camps: res.data }))
      .then(cb);
  };
};

export const addCamp = camp => {
  return dispatch => {
    axios
      .post("/api/camps", { camp })
      .then(res => dispatch({ type: ADD_CAMP, camp: res.data }));
  };
};

export const updateCamp = camp => {
  return dispatch => {
    axios
      .put(`/api/camps/${camp.id}`, { camp })
      .then(res => dispatch({ type: UPDATE_CAMP, camp: res.data }));
  };
};

export const deleteCamp = id => {
  return dispatch => {
    axios
      .delete(`/api/camps/${id}`)
      .then(() => dispatch({ type: DELETE_CAMP, id }));
  };
};
