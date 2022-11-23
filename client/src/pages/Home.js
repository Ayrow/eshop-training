import FeaturedProducts from '../components/FeaturedProducts';
import HomeHeader from '../components/HomeHeader';

const Home = () => {
  return (
    <div className='h-screen'>
      <HomeHeader />
      <FeaturedProducts />
    </div>
  );
};
export default Home;
