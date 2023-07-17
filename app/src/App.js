import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
                  
                     
                      </Router>
    </div>
  );
}

export default App;
