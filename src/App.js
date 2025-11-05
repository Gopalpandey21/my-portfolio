// src/App.js
import React, { useState, useEffect } from 'react'; // 1. Import hooks
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import MouseTrail from './components/MouseTrail';
// --- 2. IMPORTANT: REPLACE WITH YOUR GITHUB USERNAME ---
const GITHUB_USERNAME = 'Gopalpandey21';
// ----------------------------------------------------

function App() {
  // 3. Add state for projects and loading
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // 4. Add useEffect to fetch data when App loads
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Fetches repos, sorted by last updated
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        // You can filter out repos you don't want to show.
        // For example, to hide a repo named 'my-secret-repo':
        // const filteredData = data.filter(repo => repo.name !== 'my-secret-repo');
        // setProjects(filteredData);

        setProjects(data); // Set all fetched repos
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []); // The empty array [] means this runs only once on mount

  return (
    <BrowserRouter>
    <MouseTrail />
      <Navbar />
      <Routes>
        {/* 5. Pass projects and loading state down as props */}
        <Route path="/" element={<Home projects={projects} loading={loading} />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects projects={projects} loading={loading} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;