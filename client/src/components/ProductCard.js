const ProductCard = () => {
  return (
    <div className='flex flex-col items-center gap-5 border rounded-lg shadow-lg p-5'>
      <p>product image</p>
      <h4>Nice shirt</h4>
      <button className='btn'>Add to cart</button>
    </div>
  );
};
export default ProductCard;
