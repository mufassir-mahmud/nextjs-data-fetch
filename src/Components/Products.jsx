import Link from "next/link";


const Products = ({product}) => {
    const {id,name,category,description,price} = product
    return (
        <div className="card w-96 bg-base-100 card-md shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className="justify-end card-actions">
      <Link href={`products/${id}`}>
      <button className="btn btn-primary">Details</button>
      </Link>
      
    </div>
  </div>
</div>
    );
};

export default Products;