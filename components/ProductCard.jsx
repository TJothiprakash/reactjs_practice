import '../styling/product.css'


export default function ProductCard ({name, description, price}){

  return (
    <>
    <div className="product-card">
    <h2 className="product-name">{name}</h2>
    <p className="product-description">{description}</p>
    <p className="product-price">${prce}</p>
    
    </div>

    </>
  )
}