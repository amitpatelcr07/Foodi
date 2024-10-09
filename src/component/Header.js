import img from '../constant/image.png'
import { Link } from 'react-router-dom';
const Header=()=>{

    return <>
       <div className='flex justify-start h-[80px] bg-slate-100 shadow-slate-500'>
      
        <img  className='h-[80px]' src={img}/>
        
            <ul className='list-none flex justify-evenly my-8'>
            <Link to='/'>    <li className='px-10'>Home</li></Link>
             <Link to='/about'>   <li className='px-10'>About</li></Link>
             <Link to='/contact'>    <li className='px-10'>Contact</li></Link>
             <Link to='/cart'>    <li className='px-10'>Cart</li></Link>
             <Link to='/instamart'>    <li className='px-10'>Instamart</li></Link>
             <Link to='/login'>    <li className='px-10'>Login</li></Link>
             <Link to='/logout'>   <li className='px-10'>LogOut</li></Link>
            </ul>
       

       </div>
    </>
}

export default Header;