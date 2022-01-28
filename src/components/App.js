import React, { useState } from "react";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import Services from './Services';
import CustomSoftware from './CustomSoftware';

function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Routes>
          <Route
            exact
            path="/"
            element={<LandingPage setValue={setValue} setSelectedIndex={setSelectedIndex} />}
          />
          <Route exact path="/services" element={<Services setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route
            exact
            path="/customsoftware"
            element={<CustomSoftware setSelectedIndex={setSelectedIndex} />}
          />
          <Route exact path="/mobileapps" element={<div>mobile Apps</div>} />
          <Route exact path="/websites" element={<div>web sites</div>} />
          <Route exact path="/revolution" element={<div>revolution</div>} />
          <Route exact path="/about" element={<div>about</div>} />
          <Route exact path="/contact" element={<div>contact</div>} />
          <Route exact path="/estimate" element={<div>estimate</div>} />
        </Routes>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
