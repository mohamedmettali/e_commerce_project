import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import AddProduct from './Components/AddProduct';
import ListProduct from './Components/ListProduct';

function App() {
  
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <NavBar />

     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/' element={<ListProduct />} />
      <Route path='/add' element={<AddProduct />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
