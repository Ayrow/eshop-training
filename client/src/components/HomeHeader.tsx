import { Link } from 'react-router-dom';

const HomeHeader = () => {
  return (
    <div className='grid grid-cols-2'>
      <div>
        <h1 className='text-xl'>The best products for you</h1>
        <p>Discover new collections</p>
        <Link to='/products'>Check products</Link>
      </div>
      <div className='flex justify-center'>Image section</div>
    </div>
  );
};
export default HomeHeader;
