import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import assets from '../assets/assets'


const Navbar = () => {
    const [user, setuser] = useState(true);
    const navigate=useNavigate();
  return (
    <div className='py-4 flex items-center justify-between'>
        <Link to='/'>
        <img src="/logopreviewcut.png" alt="" className='w-28 sm-w-32 lg-w-40'/>
        </Link>

        <div>
            {user?
            <div className='flex items-center gap-2 sm:gap-3'>
                <button className='flex items-center gap-2 '>
                    <img className='w-5' src={assets.credit_star} alt="" />
                    <p>Credits left : 82</p>
                </button>
                <p>Hi, Alok</p>
                <div className='relative group'>
                    <img className='w-10 drop-shadow' src={assets.profile_icon} alt="" />
                    <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                        <ul><li>Logout</li></ul>
                    </div>
                </div>
            </div>
            :
            <div className='flex gap-2 sm:gap-5 items-center'>
                <p onClick={()=>navigate('/buy')} className='cursor-pointer'>Pricing</p>
                <button className='bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full'>Login</button>
            </div>
            }
        </div>

    </div>
  )
}

export default Navbar
