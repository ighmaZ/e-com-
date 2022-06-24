
  import { Routes, Route } from 'react-router-dom'
  import Home from "./routes/home/Home";
  import NavBar from "./routes/NavBar/NavBar";
  import Authentication from './routes/authentication/authentication';
  import Shop from './routes/shop/shop';
  import Checkout from './routes/checkout/checkout';


  
  const App = () => {
  
  
      
    return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path = 'shop/*' element={<Shop /> } />
        <Route path = 'auth' element={<Authentication /> } />
        <Route path = 'checkout'element={<Checkout />}/>

        </Route>
    </Routes>  
    );
  }
  export default App;
