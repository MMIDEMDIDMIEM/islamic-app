import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarS from "./components/Navbars/Navbar";
import Swipe from "./components/swiper/Swiper";
import Quraan from "./components/Quraan/Quraan";
import { Routes, Route } from "react-router-dom";
import Details from "./components/Quraan/QURAANDETIL";
import Qur from "./components/qur/qur";

import Hadis from "./components/hadis/hadis";
import Tafsir from "./components/tafsir/tafsir";
import DelTafsir from "./components/tafsir/delTafsir";
import QuraanAudio from "./components/Quraan/QurannAudio";
import AllAzkar from "./components/NewAzkar/AllAzkar";
import DetalAzkar from "./components/NewAzkar/MAzkar";
import MakkahLive from "./components/MakkaLive/MakkaLive";

function App() {
  return (
    <>
      <NavbarS />

      <Routes>
        <Route path="/" element={<Quraan />} />
        <Route path=":id" element={<Details />} />
        
      
        
          <Route path="/new" element={<AllAzkar />} />
          <Route path="/detalAzkar/:category" element={<DetalAzkar />} />
         
          
     
        <Route path="/qur" element={<Qur />} />
        <Route path="/hadis" element={<Hadis />} />
        <Route path="/tafsir" element={<Tafsir />} />
        <Route path="/tafsir/:id" element={<DelTafsir />} />
        <Route path="/Makka" element={<MakkahLive />} />
      </Routes>
    </>
  );
}

export default App;
