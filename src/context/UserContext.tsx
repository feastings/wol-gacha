import {
  createContext, useContext, useReducer,
  type ActionDispatch,
  type ReactNode
} from 'react';

export const STATE_INIT = 'init';
export const STATE_LOADING = 'loading';
export const STATE_SUCCESS = 'success';
export const STATE_ERROR = 'error';
type AppState = 'init' | 'loading' | 'success' | 'error';

export type UserData = {
  nickname?: string | null,
  partnerCharacterId?: string | null,
} | null;

export const ACTION_FETCH_SUCCESS = 'fetch_success';
export const ACTION_FETCH_ERROR = 'fetch_error';
export const ACTION_UPDATE = 'update';
export const ACTION_UPDATE_SUCCESS = 'update_success';
type UserAction =
  | { type: 'fetch_success'; payload: UserData }
  | { type: 'fetch_error'; message: string }
  | { type: 'update' }
  | { type: 'update_success', payload: UserData };

type UserState = {
  status: AppState,
  error?: string,
  user?: UserData
};

const initialState: UserState = { status: STATE_INIT }

const UserContext = createContext<UserState>(initialState);

const UserDispatchContext = createContext<ActionDispatch<[action: UserAction]>>(() => {});

type UserProviderProps = {
  children: ReactNode
};

export function UserProvider({ children }: UserProviderProps) {
  const [user, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext value={user}>
      <UserDispatchContext value={dispatch}>
        {children}
      </UserDispatchContext>
    </UserContext>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}

export function useUserDispatch(): ActionDispatch<[action: UserAction]> {
  return useContext(UserDispatchContext);
}

function userReducer(userState: UserState, action: UserAction): UserState {
  switch (action.type) {
    case ACTION_FETCH_SUCCESS:
      return {
        ...userState,
        status: STATE_SUCCESS,
        user: action.payload,
        error: undefined,
      };
    case ACTION_FETCH_ERROR:
      return {
        ...userState,
        status: STATE_ERROR,
        error: action.message,
      };
    case ACTION_UPDATE:
      return {
        ...userState,
        status: STATE_LOADING,
      };
    case ACTION_UPDATE_SUCCESS:
      return {
        ...userState,
        status: STATE_SUCCESS,
        user: { ...userState.user, ...action.payload},
        error: undefined,
      };
    default: {
      throw Error('Unknown action: ' + action);
    }
  }
}
