import { NavLink } from "react-router-dom"
export default function Header(){

    return <header><h1>eli's store</h1> <NavLink className='homebutton' to={'/'}>home</NavLink> </header>
}