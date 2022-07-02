

import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';



 
 
  import Home from "./routes/home/Home";
  import NavBar from "./routes/NavBar/NavBar";
  import Authentication from './routes/authentication/authentication';
  import Shop from './routes/shop/shop';
  import Checkout from './routes/checkout/checkout';
  import { setCurrentUser } from './store/user/user.action';

  import { 
    createUserDocumentFromAuth,
     onAuthStateChangedListener } 
     from '../src/utilities/firebase/Firebase'
  

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

      
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
