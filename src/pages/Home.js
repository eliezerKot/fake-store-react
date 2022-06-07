import Categories from "../components/Categories"
// import Cart from "./Cart"
import axios from 'axios'
import {useState,useEffect}from 'react'
export default function Home({}){
    const [categories,setCategories]=useState()
// useEffect(()=> {axios.get('https://fakestoreapi.com/products/categories').then(res=>setCategories(res.data))},[])
useEffect(()=> {axios.get('http://localhost:3085/categories').then(res=>setCategories(res.data))},[])

     
      return categories? <div className="home" ><Categories categories={categories} /></div>:<div className="loading">loading...</div>
}