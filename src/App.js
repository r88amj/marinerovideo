import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './components/pages/Home'
import NavigationBar from './components/NavigationBar/NavigationBar';

function App() {
  return (
    <>
      <Router>
        <NavigationBar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
