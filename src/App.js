
  import Home from "./routes/home/Home";
  import { Routes, Route } from 'react-router-dom'
  
  import NavBar from "./routes/NavBar/NavBar";

  
  const App = () => {
  
  
      
    return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<Home />} />
        </Route>
    </Routes>  
    );
  }
  export default App;
