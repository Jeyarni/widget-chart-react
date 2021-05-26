import axios from "axios";
import { CREATE_CHART, CREATE_CHART_FAILS, CREATE_CHART_SUCCESS, FETCH_CHART, FETCH_CHART_FAILS, FETCH_CHART_SUCCESS } from "./WidgetType";

const BASE_URL = 'http://localhost:4000/';

const getChart = () => (dispatch) => {
  dispatch({ type: FETCH_CHART });

  axios.get(`${BASE_URL}chart`)
    .then((res) => {
      // console.log(res)
      dispatch({
        type: FETCH_CHART_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_CHART_FAILS,
        payload: error,
      });
    });
};

const createChart = (data) => (dispatch) => {
  dispatch({ type: CREATE_CHART });
  axios.post(`${BASE_URL}chart`, data)
    .then((res) => {
      dispatch({
        type: CREATE_CHART_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: CREATE_CHART_FAILS,
        payload: error,
      });
    });
};

export{
  getChart,createChart
}