
//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import { HeroSection, Service, BigNFTSlider, Subscribe, Title, Category, Filter, NFTCard, Collection, FollowerTab, AudioLive } from "../components/componentsindex";
import { TiThList } from "react-icons/ti";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title heading="Latest Audio Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
       />
      <AudioLive />
      <FollowerTab />
      <Collection />
      <Title heading="Featured NFTs"
      paragraph="Discover the most outstanding NFTs in all topics of life." />
      <Filter />
      <NFTCard />
      <Title heading="Browse by Category" paragraph="Explore the NFTs in the most featured categories." />
      <Category />
      <Subscribe />
    </div>
  );
};

export default Home;
