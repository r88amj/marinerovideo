import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './components/pages/Home';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import NavigationBar from './components/NavigationBar/NavigationBar';

function App() {
  return (
    <>
      <Router>
       <NavigationBar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/login' exact Component={LoginPage}/>
          <Route path='/register' exact Component={RegisterPage} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
