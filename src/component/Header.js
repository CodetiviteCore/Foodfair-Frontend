import React, { useState } from 'react';

const Header = () => {

    // menu state
    const [showMenu, setMenu] = useState();
    let menu;

    if (showMenu) {
        return (
            // mobile menu container
            menu = <div className=" flex flex-col w-[80%] h-[100vh] fixed top-0  px-4 py-10 left-0 capitalize font-bold space-y-4 bg-white z-50 md:hidden">

                <div className='flex justify-end mx-4'>
                    {/* close icon */}
                    <img src={require('../assert/close.png')} alt="" width={'20px'} onClick={() => setMenu(!showMenu)} />
                </div>

                {/* mobile menu nav links */}
                < div className='flex flex-col space-y-5 font-bold mt-10 ' >
                    <p className='hover:bg-[#ff8a00]'>Why foodfair?</p>
                    <hr />
                    <p className='hover:bg-[#ff8a00]'>Become  a Vendor</p>
                    <hr />
                    <p className='hover:bg-[#ff8a00]'>FAQ</p>
                    <hr />
                    <p className='hover:bg-[#ff8a00]'>Privacy Policies</p>

                    {/* buttons */}
                    <button className='py-3 w-full font-bold border-2 border-black rounded-md  hover:bg-[#ff8a00] hover:text-white hover:border-white'>Log In</button>

                    <button className='py-3 w-full font-bold text-white rounded-md bg-[#ff8a00] hover:bg-white hover:text-black hover:border-2 hover:border-black'>Sign Up</button>
                </div >
            </div>
        )
    }

    return (
        <>
            {/* header container */}
            < header className=' py-5 shadow-md md:py-10' >
                {/* header */}
                < div className='mx-auto px-10 container flex justify-between' >

                    {/* logo */}
                    < div >
                        <img src={require("../assert/logo.png")} alt="" className='w-[150px] ' />
                    </div >

                    {/* nav links desktop */}
                    < div className=' space-x-10 font-bold hidden md:flex' >
                        <p className='hover:border-b-2 border-[#ff8a00]'>Why foodfair?</p>
                        <p className='hover:border-b-2 border-[#ff8a00]'>Become  a Vendor</p>
                        <p className='hover:border-b-2 border-[#ff8a00]'>FAQ</p>
                        <p className='hover:border-b-2 border-[#ff8a00]'>Privacy Policies</p>
                    </div >

                    {/* reg section */}
                    < div className='hidden md:block' >
                        <button className='py-2 px-6 font-bold border-2 border-black rounded-md mx-3 hover:bg-[#ff8a00] hover:text-white hover:border-white'>Log In</button>
                        <button className='py-2 px-6 font-bold text-white rounded-md bg-[#ff8a00] hover:bg-white hover:text-black hover:border-2 hover:border-black'>Sign Up</button>
                    </div >

                    {/* handbuger menu icon */}
                    <div className='block md:hidden'>
                        <img src={require('../assert/menu-icon.png')} alt="" width={30} onClick={() => setMenu(!showMenu)} />
                    </div>



                    {/* mobile menu body */}
                    {
                        menu
                    }
                </div >
            </header ></>
    );
}

export default Header;
