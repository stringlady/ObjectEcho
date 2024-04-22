import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import LoggedHome from './LoggedHome/LoggedHome';
import Diaries from './Diaries/Diaries';
import Search from './Search/Search';


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
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
