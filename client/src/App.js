import './App.css';
import IntroPart from './components/IntroPart';
import LoadingPart from './components/LoadingPart';
import ProfilePage from './components/ProfilePage';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <Router>

      <div className="App">
        
        <Routes>
          <Route path='/' element={<IntroPart />}></Route>
          <Route path='loading-page' element={<LoadingPart />}></Route>
          <Route path='/profile-page' element={<ProfilePage />}></Route>
        </Routes>
        
      </div>

    </Router>
    
  );
}

export default App;
