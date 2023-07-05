import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Main from './Components/Main';
import Dashboard from './Components/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Main />}>
      <Route path='/' element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
