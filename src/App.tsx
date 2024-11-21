import React from "react";
import AadhaarNumbers from "./components/AadharNumbers";
import AadhaarTelecast from "./components/AadharTelecast";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import InfoCardsSection from "./components/InforCardsSection";
import InfoSection from "./components/InfoSection";
import MediaCoverage from "./components/MediaCoverage";
import Navbar from "./components/Navbar";
import PressRelease from "./components/PressRelease";
import FAQ from "./components/FAQ";
import Navbar2 from "./components/Navbar2";

function App() {
  return (
    <>
      <Navbar2 />
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <Carousel />
        <InfoSection />
        <div className="flex flex-col sm:flex-row sm:space-x-6 px-4">
          {/* Left Side: InfoCardsSection */}
          <div className="sm:w-2/3">
            <InfoCardsSection />
          </div>
          {/* Right Side: FAQ */}
          <FAQ />
        </div>
        <MediaCoverage />
        <AadhaarTelecast />
        <PressRelease />
        <AadhaarNumbers />
        <div className="flex-grow"></div>
        <Footer />
      </div>
    </>
  );
}

export default App;