import Products from "@/Components/Products";

export const instant = false
const getProducts = async() =>{
    const res = await fetch('http://localhost:5000/products', {next: {revalidate: 10}})
    return res.json()
}

const ProductsPage = async() => {
    const products = await getProducts()
    return (
        <div className="w-10/12 mx-auto">
            <h2 className="text-3xl text-center my-7 ">This is Products page {products.length}</h2>
            <div className="grid grid-cols-3 gap-5 ">
                {
                    products.map(product => <Products product={product} key={product.id}></Products>)
                }
            </div>
        </div>
    );
};

export default ProductsPage;