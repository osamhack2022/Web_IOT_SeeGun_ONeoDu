import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Login from './components/Login';
import Home from './components/Home/Home';
import NotFound from './components/Errors/NotFound';
import DashBoard from './components/DashBoard/DashBoard';

function App() {
  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<DashBoard />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
