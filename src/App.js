import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import RestaurantDetails from './components/RestaurantDetails'
function App() {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
        <Routes>
               
               <Route path='/restaurants/:id' element={<RestaurantDetails />} />
               <Route path="/" element={<Home/>} />
               
        </Routes>
        </main>
      <Footer/>
    </Router>
  );
}

export default App;
