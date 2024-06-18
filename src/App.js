import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Products from "./components/Products";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    

    <Router>
      <Routes>
        <Route path="/" exact element={<Products />} />
      </Routes>
    </Router>
    
 
    </>
  );
}

export default App;
