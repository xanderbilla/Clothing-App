import { MiniNavbar, Newsletter, Categories, Slider, FeaturedProduct } from '../utils/Imports'

const Home = ({ popularProducts }) => {
  return (
    <>
      <MiniNavbar />
      <Slider />
      <Categories />
      <FeaturedProduct />
      <Newsletter />
    </>
  );
};

export default Home;
