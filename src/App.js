import './App.css';
import { Routes, Route,Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MarketListPage from './pages/MarketListPage';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Theme';
import { userContext } from './context/userContext';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(false);
  return (
    <userContext.Provider value={{ user, setUser }}>
      <ThemeProvider theme={theme}>
        <div className='app-container'>
                <BrowserRouter>
               <Navbar />
            <Routes>
      
              <Route path='/' element={<LoginPage />} />
              <Route path='/market' element={user?<MarketListPage />:<Navigate to="/"/>} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </userContext.Provider>
  );
}

export default App;
