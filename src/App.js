import './App.css';

import Home from "./pages/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Blog from './pages/Blog';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Layout from './components/Layout';

function App() {


  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path=':id' element={<Blog/>}/>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="users/:username" element={<Profile />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    {/* <Home /> */}
    {/* <Blog /> */}
    {/* <Signup /> */}
    {/* <Login /> */}
    {/* <Profile /> */}
    </>
  );
}

export default App;
