import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import ContactPage from "./pages/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<ContactPage />} />

        </Routes>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
