import Dashboard from "./components/DashBoard"
import Navbar from "./components/Navbar"
import AddApplications from "./pages/AddApplications"
import Applications from "./pages/Applications";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
function App() {
  const [applications, setApplications] = useState(() => {
  const savedApplications = localStorage.getItem("applications");

  return savedApplications
    ? JSON.parse(savedApplications)
    : [];
});
useEffect(() => {
  localStorage.setItem(
    "applications",
    JSON.stringify(applications)
  );
}, [applications]);
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div>
      <BrowserRouter>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Routes>
          <Route path="/" element={<Dashboard applications={applications} darkMode={darkMode}/>}/>
          <Route path="/addapplications" element={<AddApplications applications={applications} setApplications={setApplications} darkMode={darkMode}/>}/>
          <Route path="/applications" element={<Applications applications={applications} setApplications={setApplications} darkMode={darkMode}/>}/>
          <Route path="/analytics" element={<Analytics applications=
          {applications} darkMode={darkMode}/>}/>
          <Route path="/profile" element={<Profile darkMode={darkMode}/>} darkMode={darkMode}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
