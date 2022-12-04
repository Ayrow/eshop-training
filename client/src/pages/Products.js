import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../features/products/productSlice';

const Products = () => {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(getAllProducts('random '));
  }, []);

  return (
    <div>
      {allProducts.map((item) => {
        const { id, title, category, price, description, image } = item;
        return <div key={id}>{title}</div>;
      })}
    </div>
  );
};
export default Products;
