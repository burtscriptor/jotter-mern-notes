import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css'
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar';
import HomePage from '../HomePage/HomePage';

function App() {
 const [user, setUser] = useState (getUser());
  return (
    <main className="App">
     { user ? 
       <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
      </>
    :
    <AuthPage setUser={setUser} />
    }
    </main>
  )
}

export default App;
