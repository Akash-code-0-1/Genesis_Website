import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import AboutPage from "./routes/AboutPage";
import NewsPage from "./routes/NewsPage";
import CareerPage from "./routes/CareerPage";

// Importing Service Subpages
import FireAlarmSystem from "./components/FireAlarmSystem";
import FireFightingSystem from "./components/FireFightingSystem";
import FireSuppression from "./components/FireSuppression";
import EmergencyExitLightSystem from "./components/EmergencyExitLightSystem";
import CentralBatterySystem from "./components/CentralBatterySystem";
import VoiceEvacuation from "./components/VoiceEvacuation";
import FM200System from "./components/FM200System";
import KitchenHoodSystem from "./components/KitchenHoodSystem";
import AerosolSystem from "./components/AerosolSystem";
import FireHydrantSystem from "./components/FireHydrantSystem";
import FirePumpSystem from "./components/FirePumpSystem";
import SprinklerSystem from "./components/SprinklerSystem";

// Importing Our Work Subpages
import DubaiCricketStadium from "./components/DubaiCricketStadium";
import OnyxTower from "./components/OnyxTower";
import PrismTower from "./components/PrismTower";
import JumeirahHeights from "./components/JumeirahHeights";
import JumeirahGolfEstate from "./components/JumeirahGolfEstate";
import AlAndalusTowers from "./components/AlAndalusTowers";
import CrystalResidence from "./components/CrystalResidence";
import AstoriaResidence from "./components/AstoriaResidence";
import GrandeurResidence from "./components/GrandeurResidence";
import LiwaHeights from "./components/LiwaHeights";
import MajesticTower from "./components/MajesticTower";
import MikanazPlaza from "./components/MikanazPlaza";
import RegalTower from "./components/RegalTower";
import SHotel from "./components/SHotel";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/career" element={<CareerPage />} />

        {/* Service Subpage Routes */}
        <Route path="/fire-alarm-system" element={<FireAlarmSystem />} />
        <Route path="/fire-fighting-system" element={<FireFightingSystem />} />
        <Route path="/fire-suppression" element={<FireSuppression />} />
        <Route path="/emergency-exit-light-system" element={<EmergencyExitLightSystem />} />
        <Route path="/central-battery-system" element={<CentralBatterySystem />} />
        <Route path="/voice-evacuation" element={<VoiceEvacuation />} />
        <Route path="/fm-200-system" element={<FM200System />} />
        <Route path="/kitchen-hood-system" element={<KitchenHoodSystem />} />
        <Route path="/aerosol-system" element={<AerosolSystem />} />
        <Route path="/fire-hydrant-system" element={<FireHydrantSystem />} />
        <Route path="/fire-pump-system" element={<FirePumpSystem />} />
        <Route path="/sprinkler-system" element={<SprinklerSystem />} />

        {/* Our Work Subpage Routes  */}
        <Route path="/dubai-cricket-stadium" element={<DubaiCricketStadium />} />
        <Route path="/onyx-tower" element={<OnyxTower />} />
        <Route path="/prism-tower" element={<PrismTower />} />
        <Route path="/jumeirah-heights" element={<JumeirahHeights />} />
        <Route path="/jumeirah-golf-estate" element={<JumeirahGolfEstate />} />
        <Route path="/al-andalus-towers" element={<AlAndalusTowers />} />
        <Route path="/crystal-residence" element={<CrystalResidence />} />
        <Route path="/astoria-residence" element={<AstoriaResidence />} />
        <Route path="/grandeur-residence" element={<GrandeurResidence />} />
        <Route path="/liwa-heights" element={<LiwaHeights />} />
        <Route path="/majestic-tower" element={<MajesticTower />} />
        <Route path="/mikanaz-plaza" element={<MikanazPlaza />} />
        <Route path="/regal-tower" element={<RegalTower />} />
        <Route path="/s-hotel" element={<SHotel />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

