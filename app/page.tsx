import Image from "next/image";
import getAllProducts from "@/src/services/productService";

export default async function Home() {

    const response = await fetch(process.env.PRODUCT_API_URL+"products?limit=9");
    const data=await getAllProducts();


    return (
        <>
            {data.products.map(product=>(
                <p key={product.id}> {product.title}</p>
            ))}
        </>
    );
}
