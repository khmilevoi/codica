import { initialState } from "constants/initialState";
import { app } from "constants/actionTypes";

export const appReducer = (state = initialState.app, { type, payload }) => {
  switch (type) {
    case app.SET_ERROR: {
      return {
        error: payload
      };
    }

    case app.LOADING: {
      return {
        isLoading: true
      };
    }

    case app.LOADED: {
      return {
        isLoading: false
      };
    }

    default: {
      return state;
    }
  }
};
