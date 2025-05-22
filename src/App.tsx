import "./App.css";
import BestDeal from "./components/BestDeal/BestDeal";
import Dream from "./components/Dream/Dream";
import Header from "./components/Header/Header";
import HowItWork from "./components/HowItWork/HowItWork";
import Footer from "./components/Footer/Footer";
import {
  navBar,
  heroInfo,
  howItWorksCards,
  dreamSection,
  trendingCards,
  bestDeals,
  footerData, 
} from './DataProject/Data'
import MostTrending from "./components/MostTrending/MostTrending";
const App: React.FC=()=> {
    return (
      <div className="up-container">
        <Header logo='/logo/logo.png' links={ navBar} title="Discover a place you will love to live" heroInfo={heroInfo} />
        <HowItWork cardWINfo={howItWorksCards} />
        <Dream data={dreamSection } />
        <MostTrending cardTINfo={ trendingCards} />
        <BestDeal data={bestDeals } />
        <Footer data={footerData}/>
      </div>
    );
}
export default App;

