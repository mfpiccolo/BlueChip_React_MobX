const initialState = {
  data: [],
  loading: false
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "LOADING_DATA": {
      return { ...state, loading: true };
      break;
    }

    case "LOADING_SUCCESS": {
      return { ...state, loading: false };
      break;
    }

    case "LOADING_DATA": {
      return {
        ...state,
        loading: false,
        error: true
      };
      break;
    }
  }

  return state;
}
