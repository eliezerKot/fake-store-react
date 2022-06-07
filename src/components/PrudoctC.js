import { useState } from "react"
import { appContext } from "../App";
import { useContext } from "react"
export default function ProductC({ product }) {

    const data = useContext(appContext)
console.log(data);

    // console.log("🚀 ~ file: ProductP.js ~ line 9 ~ ProductP ~ appContext", data)

    const [button, setButton] = useState(<button></button>)

    return  <div className="prudoct">

        <img alt="prudoct" className="image" src={product.image} /><br />

        {product.title}<br /><div className="mmany">{`${product.price}$`}</div>

        <br /><button >add to cart</button><br />

        <div className="disc">{product.description}</div></div>
}