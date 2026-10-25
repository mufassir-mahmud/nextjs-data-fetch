
export const instant = false
export const generateStaticParams = async() =>{
    const res = await fetch('http://localhost:5000/products')
    const products = await res.json();
    return products.map(product => ({productId : product.id}))
}
const ProductDetailsPage = async ({params}) => {
    const {productId} = await params;
    const res = await fetch(`http://localhost:5000/products/${productId}`)
    const {name,category,description} = await res.json()
    return (
        <div>
            <h2 className="text-3xl text-center my-7 ">This is Product details page {productId}</h2>

            <div className="flex justify-center">
                <div className="card w-96 bg-base-100 card-md shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <p>{category}</p>
    <div className="justify-end card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;