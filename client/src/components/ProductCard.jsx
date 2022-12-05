const ProductCard = ({ title, description, price, image }) => {
  return (
    <div className='flex flex-col items-center gap-5 border rounded-lg shadow-lg p-5'>
      <img src={image} alt={title} className='w-20 h-20' />
      <h4>{title}</h4>
      <button className='btn'>Add to cart</button>
    </div>
  );
};
export default ProductCard;
