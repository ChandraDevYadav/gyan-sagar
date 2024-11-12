import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import WebNavbar from './Components/Header/WebNavbar.jsx';
import MobNavbar from './Components/Header/MobNavbar.jsx';
import MainFooter from './Components/Footer/MainFooter.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <WebNavbar/>
  <MobNavbar/>
    <App />
    <MainFooter />
  </BrowserRouter>,
)
