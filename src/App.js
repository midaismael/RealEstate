import React from "react";
import Best from "./Component/Best/Best";
import Feature from "./Component/Featured/Feature";
import Footer from "./Component/Footer/Footer";
import Hero from "./Component/Hero/Hero";
import Navbar from "./Component/Navbar";
function App() {
  return (
    <>
     <Navbar />
     <Hero />
     <Best />
     <Feature />
     <Footer />
    </>
  );
}

export default App;
