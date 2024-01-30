import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import { Home, Login, Signup } from './pages';

// components
import { Navbar } from './components';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
