import User from "./components/User";
import { State } from "./hooks/state";
import Form from "./hooks/form";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Navbar from "./Components/Navbar";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <>
      {/* <User
        name="Divya"
        age={21}
        skills={["React", "JavaScript", "Node.js"]}
      />
      <hr />
      <State />
      <hr />
      <Form /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} /> 
        <Route path="/services/:id" element={<ProductDetails/>} />


      </Routes>
      <div>App</div>

    </>

  );
};

export default App;