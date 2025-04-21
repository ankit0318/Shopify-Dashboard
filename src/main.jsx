import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { registerLicense } from '@syncfusion/ej2-base';
import { ContextProvider } from './contexts/Context.jsx';

// Register Syncfusion license key
// Replace 'YOUR_SYNCFUSION_LICENSE_KEY' with your actual license key

registerLicense(import.meta.env.VITE_SYNCFUSION_LICENSE_KEY);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ContextProvider>
    <App />
 </ContextProvider>
  </StrictMode>,
)
