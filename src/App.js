import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './components/pages/Home';
import  Navbar  from './components/Navbar/Navbar'
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
       {/* <NavigationBar/>*/}
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
