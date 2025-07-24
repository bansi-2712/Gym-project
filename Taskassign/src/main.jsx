import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
 


import Gallary from './Router/Gallary.jsx'
import Api from './Router/Gymapi.jsx'
import { Provider } from 'react-redux'
import {Store} from './redux/Store.jsx'
import { AuthProvider } from './Router/Authcontext.jsx'
 

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider > 
    <Provider store={Store}>
<BrowserRouter> 

    <App />
    </BrowserRouter>
    </Provider>
    </AuthProvider>
    
  </StrictMode>,
 
)
 
