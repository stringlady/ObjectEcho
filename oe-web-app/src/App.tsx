import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import LoggedHome from './LoggedHome/LoggedHome';
import Diaries from './Diaries/Diaries';
import Search from './Search/Search';
import Details from './Details/Details';
import Profile from './Profile/Profile';


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
          <Route path='/details/:id' element={<Details/>}/>
          <Route path='/profile/:id' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
