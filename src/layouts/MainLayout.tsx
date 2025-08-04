import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import TopTrending from "./TopTrending";
import TrendingNow from "../components/TrendingNow";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="md:py-17 py-13 px-2 md:px-10 space-y-4 ">
         <div className="flex space-x-2 flex-col md:flex-row md:py-2">
        <div className="md:w-[60%] w-full">
        <Carousel />
        </div>
        <div className="w-full py-2 md:py-0">
        <TopTrending />
        </div>
      </div>
      <div>
      <TrendingNow />
      </div>
      </div>
    </div>
  );
};

export default MainLayout;
