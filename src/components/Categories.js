import {Link}from 'react-router-dom'
export default function Categories({categories}){

    return categories.map(v=> <Link key={v.name} to={'/category/' + v.name}> <div  className='categories'><div className='text'>{v.name}</div></div></Link>)

}