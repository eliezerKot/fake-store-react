// import { useState } from "react"
// import Buy from "../components/Buy"
// import { useContext } from "react"
// import { appContext } from "../App"
// export default function Cart() {

//     const [cart, setCart] = useState()
//     const boght = useContext(appContext)

   
//     console.log('boght', boght);

    // function addToCart(prod) {
    //     if (cart.find(v => v.id == prod.id)) {
    //         prod.count++
    //         setCart([...cart])
    //     }
    //     else
    //         setCart([...cart, { ...prod, count: 1 }])
    // }

//     return cart ? cart.map(v => { <aside className="cart"><h3>cart</h3><br /><Buy boght={boght} /></aside> }) :
//         <aside className="cart">
//             {console.log(boght)}
//             <h3>cart</h3>
//             <br />cart is empty<Buy /></aside>

// }