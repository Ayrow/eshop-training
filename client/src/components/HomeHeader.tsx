import { Link } from 'react-router-dom';

const HomeHeader: React.FC = () => {
  return (
    <div className=' h-full flex justify-center'>
      <div className='flex flex-col items-center'>
        <h1 className='text-xl'>The best products for you</h1>
        <p className='mt-2'>Discover new collections</p>
        <Link to='/products' className='btn mt-5'>
          Check products
        </Link>
      </div>
    </div>
  );
};
export default HomeHeader;
