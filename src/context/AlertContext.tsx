import {
  createContext, useContext, useReducer,
  type ActionDispatch,
  type ReactNode
} from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export const SUCCESS = 'success';
type AlertType = 'success';

export type AppAlert = {
  id: string,
  message: string,
  type: AlertType
};

export const ACTION_ADD_ALERT = 'add_alert';
export const ACTION_CLOSE_ALERT = 'close_alert';
type AlertAction =
  | { type: 'add_alert'; payload: AppAlert }
  | { type: 'close_alert'; payload: string }

type AlertState = {
  alerts: Array<AppAlert>
};

const initialState: AlertState = { alerts: [] };

const AlertContext = createContext<AlertState>(initialState);

const AlertDispatchContext = createContext<ActionDispatch<[action: AlertAction]>>(() => {});

type AlertProviderProps = {
  children: ReactNode
};

export function AlertProvider({ children }: AlertProviderProps) {
  const [alertState, dispatch] = useReducer(alertReducer, initialState);
  return (
    <AlertContext value={alertState}>
      <AlertDispatchContext value={dispatch}>
        {alertState.alerts.map((alert: AppAlert) => (
          <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            autoHideDuration={6000}
            key={alert.id}
            open
            onClose={() => dispatch({ type: ACTION_CLOSE_ALERT, payload: alert.id })}
          >
            <Alert
              onClose={() => dispatch({ type: ACTION_CLOSE_ALERT, payload: alert.id })}
              severity={alert.type}
            >
              {alert.message}
            </Alert>
          </Snackbar>
        ))}
        {children}
      </AlertDispatchContext>
    </AlertContext>
  );
}

export function useAlertContext() {
  return useContext(AlertContext);
}

export function useAlertDispatch(): ActionDispatch<[action: AlertAction]> {
  return useContext(AlertDispatchContext);
}

function alertReducer(alertState: AlertState, action: AlertAction): AlertState {
  switch (action.type) {
    case ACTION_ADD_ALERT: {
      const newAlerts = [...alertState.alerts, action.payload];
      return {
        ...alertState,
        alerts: newAlerts,
      };
    }
    case ACTION_CLOSE_ALERT: {
      const newAlerts = [...alertState.alerts];
      const idxToRemove = newAlerts.findIndex((alert: AppAlert) => alert.id === action.payload);
      newAlerts.splice(idxToRemove, 1);
      return {
        ...alertState,
        alerts: newAlerts,
      };
    }
    default: {
      throw Error('Unknown action: ' + action);
    }
  }
}
