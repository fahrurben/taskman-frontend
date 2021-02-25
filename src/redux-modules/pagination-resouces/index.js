import { handleAction } from 'redux-actions';
import { SET_PAGINATION_RESOURCES } from '../types';

function createPaginationResources(type) {
  const defaultState = {
    data: [],
    page: 1,
    totalPage: 1,
    perPage: 10,
  };

  const reducer = handleAction(
    SET_PAGINATION_RESOURCES,
    (state, action) => {
      if (action.meta.type !== type) {
        return state;
      }

      return {
        ...state,
        data: action.payload.data,
        page: action.payload.page,
        totalPage: action.payload.totalPage,
        perPage: action.payload.perPage,
      };
    },
    defaultState,
  );

  return reducer;
}

export default createPaginationResources;
