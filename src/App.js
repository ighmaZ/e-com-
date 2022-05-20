
  import Home from "./routes/home/Home";
  import { Routes, Route } from 'react-router-dom'
  
  import NavBar from "./routes/NavBar/NavBar";
import SignIn from "./routes/Sign in/Sign-in";


  const Shop = () => {
    return (
    <h1> its shop page babe!</h1>
    )
  }
  
  const App = () => {
  
  
      
    return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path = 'shop' element={<Shop /> } />
        <Route path = 'SignIn' element={<SignIn /> } />

        </Route>
    </Routes>  
    );
  }
  export default App;
