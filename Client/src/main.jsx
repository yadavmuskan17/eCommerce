import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import store from './Redux/store.jsx';
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginContext from './LoginContext.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <LoginContext>
     <App />

     </LoginContext>
</Provider>
)
