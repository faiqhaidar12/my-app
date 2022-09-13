import { Route, Routes } from "react-router-dom";
import "./App.css";
import DataKunjungan from "./pages/DataKunjungan";
import DataPasien from "./pages/DataPasien";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="data%20pasien" element={<DataPasien />} />
        <Route path="data%20kunjungan" element={<DataKunjungan />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
