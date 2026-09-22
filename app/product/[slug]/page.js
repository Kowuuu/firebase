import {getProductById} from "../../../src/services/productService";
import SearchBar from "../../../src/components/searchBar";

export default async function Slug({params}){

    const {slug} = await params;
    const dataResponse=await getProductById(slug);

    if(!dataResponse){
        return <h1>Ova stranica ne postoji</h1>
    }

    return<>
       <p>{dataResponse.title}</p>
        <p>Description {dataResponse.description}</p>
        <p>Price {dataResponse.price}</p>

    </>
}