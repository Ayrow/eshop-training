import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  return (
    <div className=' bg-neutral-600 py-5'>
      <h2 className='text-center text-xl'>Featured Products</h2>
      <div className='mt-10 flex justify-around flex-wrap'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};
export default FeaturedProducts;
