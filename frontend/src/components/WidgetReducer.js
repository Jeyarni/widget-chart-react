import { CREATE_CHART, CREATE_CHART_FAILS, CREATE_CHART_SUCCESS, FETCH_CHART, FETCH_CHART_FAILS, FETCH_CHART_SUCCESS } from "./WidgetType";

const WidgetReducer = (
  state = {
    chartData: {
      fetching: false,
      data: [],
      error: { status: false, message: null },
    },
  }, action,
) => {
  switch (action.type) {
    case FETCH_CHART:
      return {
        ...state,
        chartData: {
          fetching: true,
          error: { status: false, message: null },
          data: [],
        },
      };

    case FETCH_CHART_SUCCESS:
      return {
        ...state,
        chartData: {
          ...state.chartData,
          fetching: false,
          data: action.payload,
        },
      };
    case FETCH_CHART_FAILS:
      return {
        ...state,
        chartData: {
          fetching: false,
          error: { status: true, message: action.payload },
          data: [],
        },
      };

    case CREATE_CHART:
      return {
        ...state,
        chartData: {
          fetching: true,
          error: { status: false, message: null },
          data: [],
        },
      };
    case CREATE_CHART_SUCCESS:
      return {
        ...state,
        chartData: {
          ...state.chartData,
          fetching: false,
          data: action.payload,
          // data: state.chartData.data.concat(action.payload),
        },
      };
    case CREATE_CHART_FAILS:
      return {
        ...state,
        chartData: {
          fetching: false,
          error: { status: true, message: action.payload },
          data: [],
        },
      };

    default:
      return state;
  }
}
export { WidgetReducer };