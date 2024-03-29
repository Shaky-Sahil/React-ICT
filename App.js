import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Addemp from './components/Addemp';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/add' element={<Addemp/>}></Route>
        </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;
