import { useNavigate } from "react-router-dom"
export default function ProductsC({products}){
    const navigate = useNavigate()
    return  products.map(v=> <div onClick={()=>navigate('/item/' + v.id)} key={v.title}>
         <div  className='productsc'>
             <img className="images" src={v.image}/><br/>
             <div className='text'>
       <div className="many">{`${v.price}$`}</div> 
        <br/>
        {v.title}
        </div>
        </div>
        </div>)
}