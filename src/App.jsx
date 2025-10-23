import { useState } from "react";
// import { Navbar } from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import Contact  from "./pages/Contact";
import { Footer } from "./components/Footer";
import EventsPage from "./pages/Events";
import EventDetailPage from "./pages/EventDetail";
import { Navbar } from "./components/Navbar";
import CommitteePage from "./pages/Commitee";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/committee" element={<CommitteePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/abc" element={<EventDetailPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
