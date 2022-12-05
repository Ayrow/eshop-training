const ProductCard = ({ title, description, price, image }) => {
  const addToCart = () => {};

  return (
    <div className='flex flex-col items-center gap-5 border rounded-lg shadow-lg p-5'>
      <img src={image} alt={title} className='w-20 h-20' />
      <h4 className=' text-center'>{title}</h4>
      <h3 className=' text-lg font-bold'>{price}€</h3>
      <button className='btn' onClick={addToCart}>
        Add to cart
      </button>
    </div>
  );
};
export default ProductCard;
