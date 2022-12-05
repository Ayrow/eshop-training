import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { getAllProducts } from '../features/products/productSlice';

const Products = () => {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(getAllProducts('random '));
  }, []);

  return (
    <div className=' my-5 mx-5'>
      <div className='grid grid-cols-3 gap-5'>
        {allProducts.map((item) => {
          return <ProductCard key={item._id} {...item} />;
        })}
      </div>
    </div>
  );
};
export default Products;
