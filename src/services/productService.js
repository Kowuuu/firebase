
export default async function getAllProducts(limit=9) {
    const response = await fetch(process.env.PRODUCT_API_URL+"products?limit="+limit,{
        next:{
            revalidate:3600, //1 sat   drzimo/kesiramo odgovor tj sacuvamo
        }
    });
    return await response.json();
}
export async function getProductById(productId){
    const response = await fetch(process.env.PRODUCT_API_URL+"products/"+productId);
    if(response.status === 404){
        return false;
    }
    return await response.json();
}
export async function searchProductByQuery(query){
    const response = await fetch(process.env.PRODUCT_API_URL+"products/search?q="+query)
    return await response.json();
}
export function addProduct(title,price,description){
    fetch(process.env.PRODUCT_API_URL+'products/add', {
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify({
                title:title,
                price:price,
            description:description,
        })
    })
        .then(res=>res.json())
        .then(console.log)
}









