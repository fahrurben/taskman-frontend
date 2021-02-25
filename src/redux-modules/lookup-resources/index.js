import { handleAction } from 'redux-actions';
import { SET_LOOKUP_RESOURCES } from '../types';

function createLookupResources(type) {
  const defaultState = [];

  const reducer = handleAction(
    SET_LOOKUP_RESOURCES,
    (state, action) => {
      if (action.meta.type !== type) {
        return state;
      }

      return [...action.payload];
    },
    defaultState,
  );

  return reducer;
}

export default createLookupResources;
