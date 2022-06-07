import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ProductC from "../components/PrudoctC";

export default function ProductP() {
    const [product, setproduct] = useState()
   
    const params = useParams()
   
    // useEffect(() => { axios.get(`https://fakestoreapi.com/products/${params.itemid}`).then(res => setproduct(res.data)) }, [])
    useEffect(() => { axios.get(`http://localhost:3085/categorey/product/${params.itemid}`).then(res => setproduct(res.data)) }, [])
    console.log(params);
    console.log(product);
    return product ? <div>
        <ProductC product={product} /></div> : <div className="loading">loading...</div>

}