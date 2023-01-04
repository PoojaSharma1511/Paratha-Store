import Home from "./pages/Home";
import { Provider } from "react-redux";
import Hero from "./component/Hero";
import Mainsection from "./component/Mainsection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store/store";
import Cart from "./pages/Cart";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";


// hwo write map funcation


function App() {

  return (

    <div>
      <ChakraProvider>     <Provider store={store}>
     <Router>
      <Navbar/>
      <Routes>
     <Route path="/" element={<><Mainsection/> <Hero/></>} />  
     <Route path="/Home" element={<Home/>} />   
     <Route path="/Cart" element={<Cart/>} /> 
     
      </Routes>
      <Footer/>
      </Router>
      </Provider>
      </ChakraProvider>

      </div>
  );
}

export default App;
