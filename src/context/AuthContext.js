import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import {
  loginWithEmailAndPassword,
  onAuthStateChangedObserver,
  signOutFirebase,
  signUpWithEmailAndPassword,
} from '../api/auth';
import {useLoaderContext} from './LoaderContext';

const UserDafultState = {
  user: null,
  loadingInitialUserState: false,
  login: async (email, password) => {},
  dispatch: () => {},
  logout: async () => {},
  register: async (email, password) => {},
};
const AuthContext = React.createContext(UserDafultState);

export const UserActionsTypes = {
  SET_USER: 'USR_setUser',
  REMOVE_USER: 'USR_removeUser',
  SET_LOADING_INITIAL_STATE: 'USR_setLoadingInitialState',
};

const UserReducer = (state, action) => {
  switch (action.type) {
    case UserActionsTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case UserActionsTypes.REMOVE_USER:
      return {
        ...state,
        user: null,
      };
    case UserActionsTypes.SET_LOADING_INITIAL_STATE:
      return {
        ...state,
        loadingInitialUserState: true,
      };
    default:
      return state;
  }
};

export function AuthProvider({children}) {
  const [state, dispatch] = useReducer(UserReducer, UserDafultState);
  const {toggleLoadingMask} = useLoaderContext();
  const login = useCallback(
    async (email, password) => {
      try {
        toggleLoadingMask();
        await loginWithEmailAndPassword(email, password);
        // dispatch({type: UserActionsTypes.SET_USER, payload: user});
      } catch (error) {
        throw error;
      } finally {
        toggleLoadingMask();
      }
    },
    [toggleLoadingMask],
  );

  const register = useCallback(
    async (email, password) => {
      try {
        toggleLoadingMask();
        await signUpWithEmailAndPassword(email, password);
        // dispatch({type: UserActionsTypes.SET_USER, payload: user});
      } catch (error) {
        throw error;
      } finally {
        toggleLoadingMask();
      }
    },
    [toggleLoadingMask],
  );

  const logout = useCallback(async () => {
    try {
      toggleLoadingMask();
      await signOutFirebase();
    } catch (error) {
      throw error;
    } finally {
      setTimeout(() => {
        toggleLoadingMask();
      }, 500);
    }
  }, [toggleLoadingMask]);

  const enableSpinnerOnInitCharge = useCallback(
    completed => {
      if (!state.loadingInitialUserState) {
        toggleLoadingMask();
        completed &&
          dispatch({type: UserActionsTypes.SET_LOADING_INITIAL_STATE});
      }
    },
    [state.loadingInitialUserState, toggleLoadingMask],
  );

  useEffect(() => {
    enableSpinnerOnInitCharge();
    const unsubscribe = onAuthStateChangedObserver(
      user => {
        enableSpinnerOnInitCharge(true);
        dispatch({type: UserActionsTypes.SET_USER, payload: user});
      },
      () => {
        enableSpinnerOnInitCharge(true);
        dispatch({type: UserActionsTypes.REMOVE_USER});
      },
    );

    return unsubscribe;
  }, [
    toggleLoadingMask,
    state.loadingInitialUserState,
    enableSpinnerOnInitCharge,
  ]);

  const value = useMemo(
    () => ({
      ...state,
      login,
      dispatch,
      logout,
      register,
    }),
    [state, dispatch, login, logout, register],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
