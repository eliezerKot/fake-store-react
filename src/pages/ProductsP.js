import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductsC from "../components/PrudoctsC";
export default function ProductsP(){
    const [products,setproducts]=useState()
    const params = useParams()
    // useEffect(()=> {axios.get(`https://fakestoreapi.com/products/category/${params.products}`).then(res=>setproducts(res.data))},[])
    useEffect(()=> {axios.get(`http://localhost:3085/categorey/${params.products}`).then(res=>setproducts(res.data))},[])
    // console.log(params);
    // console.log(products);
return products? <div className="all"> 
<ProductsC products={products}/></div>:<div className="loading">loading...</div>

}