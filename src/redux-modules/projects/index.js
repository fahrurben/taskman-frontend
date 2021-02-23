import { SET_PROJECTS } from './types';

function reducer(state = {
  data: [],
  page: 1,
  totalPage: 1,
  perPage: 10,
}, action) {
  switch (action.type) {
    case SET_PROJECTS:
      return {
        ...state,
        data: action.payload,
        page: action.meta.page,
        totalPage: action.meta.totalPage,
        perPage: action.meta.perPage,
      };
    default: return state;
  }
}

export default reducer;
