import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { persist, store } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <PersistGate loading={'loading...'} persistor={persist}>
    <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>
)
