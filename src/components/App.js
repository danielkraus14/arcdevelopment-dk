import React, { useState, useEffect } from "react";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import Services from './Services';
import CustomSoftware from './CustomSoftware';
import MobileApps from "./MobileApps";
import Websites from "./Websites";
import Revolution from "./Revolution";
import AboutUs from "./AboutUs";
import Contact from './Contact';
import Estimate from './Estimate';

function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
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
            element={<CustomSoftware setValue={setValue} setSelectedIndex={setSelectedIndex} />}
          />
          <Route exact path="/mobileapps" element={<MobileApps setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route exact path="/websites" element={<Websites setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route exact path="/revolution" element={<Revolution setValue={setValue} />} />
          <Route exact path="/about" element={<AboutUs setValue={setValue} />} />
          <Route exact path="/contact" element={<Contact setValue={setValue} />} />
          <Route exact path="/estimate" element={<Estimate setValue={setValue} />} />
        </Routes>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
