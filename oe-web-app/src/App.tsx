import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import LoggedHome from './LoggedHome/LoggedHome';
import Diaries from './Diaries/Diaries';


function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/logged/home' element={<LoggedHome/>}/>
          <Route path='/logged/diaries' element={<Diaries/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
