import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Swaap from './Components/Swaap/Swaap';
import Lpfarming from './Components/Lpfarming/Lpfarming';
import Nftopen from './Components/Nftopen/Nftopen';
import Nft from './Components/Nft/Nft';
import About from './Components/About/About';
import Buy from './Components/Buy/Buy';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Cycle_1 from './Components/Cycle_1/Cycle_1';
import Cycle_2 from './Components/Cycle_2/Cycle_2';
import Cycle_3 from './Components/Cycle_3/Cycle_3';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckRegister from './Components/Register/CheckRegister';
import Buy_Coin_History from './Components/Buy_Coin_History/Buy_Coin_History';
import Refferral_history from './Components/Refferral/Refferral_history';
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <ToastContainer />
      <Routes>
       <Route exact path='/' element={<Home/>}/> 
       <Route exact path='about' element={<About/>}/> 
       <Route exact path='Register' element={<Register/>}/>
       <Route exact path='cycle1' element={<Cycle_1/>}/>
       <Route exact path='cycle2' element={<Cycle_2/>}/>
       <Route exact path='cycle3' element={<Cycle_3/>}/>
       <Route exact path='buy' element={<Buy/>}/> 
       <Route exact path='CheckRegister' element={<CheckRegister/>}/> 
       <Route exact path='Buy_Coin_History' element={<Buy_Coin_History/>}/> 
       <Route exact path='Refferral_history' element={<Refferral_history/>}/> 




       <Route exact path='nft' element={<Nft/>}/> 
       <Route exact path='nftop' element={<Nftopen/>}/> 
       <Route exact path='lpfar' element={<Lpfarming/>}/> 
       <Route exact path='sawp' element={<Home/>}/> 
       <Route exact path='wonder' element={<Swaap/>}/> 
      </Routes>
      <Footer/>
      </Router>
      {/* <Swaap/> */}
      {/* <Lpfarming/> */}
      {/* <Nftopen/> */}
      {/* <Nft/> */}
      {/* <About/> */}
      {/* <Buy/> */}
      {/* <Home/> */}
  
    </div>
  );
}

export default App;
