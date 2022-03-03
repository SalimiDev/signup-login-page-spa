import SignUp from './components/SignUp';
import Login from './components/Login';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
      return (
            <div className='App'>
                  <Routes>
                        <Route path='/' element={<Navigate to={'/signup'} />} />
                        <Route path='/signup' element={<SignUp />} />
                        <Route path='/Login' element={<Login />} />
                  </Routes>
            </div>
      );
}

export default App;
