import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import loginReducer from '../features/login/loginSlice'
const reduxSagaMonitorOptions = {};
const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions)
const middlewares = [sagaMiddleware]

export const store = configureStore({
    reducer: {
          login: loginReducer,
    },
    middleware: [...getDefaultMiddleware(), ...middlewares],
  });
  