import "./App.less";
import "antd/dist/antd.css";
import MachineryListSection from "./components/MachineryListSection";

import Navbar from "./components/common/Navbar";
import { useEffect, useState } from "react";
import MobileNavbar from "./components/common/MobileNavbar";
import Footer from "./components/common/Footer";
import Puzzle from "./Puzzle";
import NumberSection from "./components/common/NumberSection";
import BookingForm from "./components/BookingFormSection";
import OldNewSection from "./components/common/OldNewSection";
import ProjectSection from "./components/ProjectsSection";

function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isRentalOpen, setIsRentalOpen] = useState(false);

  return (
    <div className="App">
      <Navbar
        isMobileNavOpen={isMobileNavOpen}
        showMobileNav={setIsMobileNavOpen}
      />
      <MobileNavbar
        isMobileNavOpen={isMobileNavOpen}
        setIsMobileNavOpen={setIsMobileNavOpen}
      />
      <NumberSection />
      <MachineryListSection
        isRentalOpen={isRentalOpen}
        setIsRentalOpen={setIsRentalOpen}
      />
      <ProjectSection/>
      <BookingForm />
      {/* <RentalForm isOpen={isRentalOpen} setIsOpen={setIsRentalOpen}/> */}
      <OldNewSection></OldNewSection>
      <div id="game" className="h-screen justify-center text-center mt-6 pt-8">
        <p className="text-5xl font-semibold tracking-wide">
          Instructions and Point
        </p>
        <p className="text-left px-96 text-lg">
          You are ordered to group these historical construction period in to
          two section (Old and New)
        </p>
        <p className="text-left px-96 text-lg">
          <b>Points</b>
          <ol>
            <li>
              Grouping the bench in the right section and position will give you
              full point (12pts)
            </li>
            <li>Grouping in the wrong section will not have any point</li>
            <li>
              Grouping in the right section and Ordering on the wrong position
              will deduct (right position - your position) points
            </li>
          </ol>
        </p>
        <Puzzle />
        <Footer />
      </div>
    </div>
  );
}

export default App;
