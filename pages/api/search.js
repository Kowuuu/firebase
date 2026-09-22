//api/search?query=Toma
import {searchProductByQuery} from "../../src/services/productService";

export default async function handler(req, res){
    //req-request podaci koje vi saljete kada dolazite na stranicu
    //res-response je odgovor koji vi dajete
    if(!req.query.pretraga){
        res.status(400).json({message:"Niste prosledili parametar za pretragu"})
    }

    const data=await searchProductByQuery(req.query.pretraga)

    res.status(200).json(data);
}