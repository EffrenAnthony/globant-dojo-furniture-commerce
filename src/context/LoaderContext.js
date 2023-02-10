import React, {useCallback, useContext, useMemo, useReducer} from 'react';

const LoaderDefaultState = {
  loadingMask: false,
  dispatch: () => {},
  toggleLoadingMask: () => {},
};
const LoaderContext = React.createContext(LoaderDefaultState);

export const LoaderActionsTypes = {
  TOGGLE_SPINNER_INDICATOR: 'LDR_toggleSpinner',
};

const UserReducer = (state, action) => {
  switch (action.type) {
    case LoaderActionsTypes.TOGGLE_SPINNER_INDICATOR:
      return {
        ...state,
        loadingMask: !state.loadingMask,
      };
    default:
      return state;
  }
};

export function LoaderProvider({children}) {
  const [state, dispatch] = useReducer(UserReducer, LoaderDefaultState);

  const toggleLoadingMask = useCallback(() => {
    dispatch({type: LoaderActionsTypes.TOGGLE_SPINNER_INDICATOR});
  }, []);
  const value = useMemo(
    () => ({
      ...state,
      dispatch,
      toggleLoadingMask,
    }),
    [state, dispatch, toggleLoadingMask],
  );

  return (
    <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>
  );
}

export function useLoaderContext() {
  return useContext(LoaderContext);
}
